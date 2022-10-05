import React, { useRef, useEffect } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useArrayRef() {
    // create a refs array initialize it to empty array
    const refs = useRef([]);
    refs.current = [];
    // push all the ref in the array
    return [refs, (ref) => ref && refs.current.push(ref)];
}

export function SplitText({ children }) {
    // console.log(children);
    let words = children.toString().split("  ");
    // console.log(words);
    const triggerRef = useRef();

    const [refs, setRef] = useArrayRef();

    useEffect(() => {
        const splitTextTween = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top bottom",
                markers: true,
            },
        });
        splitTextTween.fromTo(
        refs.current, 
            { autoAlpha: 0, display: "inline-block", y: "100%"},
            { autoAlpha: 1,
            delay: 0.2,
            display: "inline-block",
            duration: 1.5,
            ease: "back.inOut",
            stagger: 0.05,
            y: "0%",
            }
        );
    }, [refs]);

    return words.map((word, i) => {
        return (
            <span 
            ref={triggerRef}
            key={children + i}
            style={{display: "inline-blick", overflow: "hidden"}}
            >
                <span
                ref={setRef}
                style={{display: "inline-blick", overflow: "hidden"}}
                >
                    {word + (i !== words.length - 1 ? "\u00A0)" : " ")}
                </span>
            </span>
            );
        });
}
