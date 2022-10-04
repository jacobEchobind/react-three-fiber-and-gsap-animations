import * as THREE from 'three'
import React, {useRef, Suspense} from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const ImageWaveMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uTexture: new THREE.Texture(), 
    },
    // vertex shader
    glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

    void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFraq = 2.0;
        float noiseAmp = 0.4;
        vec3 noisePos = vec3(pos.x * noiseFraq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
    `,
    // fragment shader
    glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;
    uniform sampler2D uTexture;

    void main() {
        vec3 texture = texture2D(uTexture, vUv).rgb;
        float wave = vWave * 0.2;

        gl_FragColor = vec4(texture, 1.0);
    }
    `
);

extend ({ ImageWaveMaterial });

const ImageWave= ({image}) => {
  const imageWaveMaterialRef = useRef();
  const [featureImage] = useLoader(THREE.TextureLoader, [image]);
  useFrame(
    ({clock}) => (imageWaveMaterialRef.current.uTime = clock.getElapsedTime())
    );
    return (
        <mesh>
            <planeBufferGeometry args={[1, 0.57, 16, 16]}/>
            {/* <meshStandardMaterial wireframe={true}/> */}
            <imageWaveMaterial ref={imageWaveMaterialRef} uTexture={featureImage}/>
        </mesh>
    )
}

const Scene = ({image}) => { 
  return (
    <Canvas camera={{fov: 8}}>
        <Suspense fallback={null} >
            <ImageWave image={image}/>
        </Suspense>
    </Canvas>
  )
}

export default Scene