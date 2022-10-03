import React from 'react'
import styled from 'styled-components'
import One from '../images/1.jpg'
import Two from '../images/2.jpg'
import Three from '../images/3.jpg'
import Four from '../images/4.jpg'
// import Five from '../images/5.jpg'

const StyledHeroWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
margin: 0;
width; 100Vw;
color: #fff;
min-height: 100vh;
`;

const StyledHeroTextOne = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
h2{
    color: #000;
    position: relative;
    perspective: 200px;
    letter-spacing: 4px;
    margin: 0;
    text-align: left;
    text-transform: uppercase;
    font-family: "Fraunces", serif;
    font-style: italic;
    font-weight: 300;
    font-size: 8em;
    line-height: 0.9em;
}
    .hero__image{
        margin-right: 12px;
        max-width: 240px;
        flex: 1 0;
        img{
            // display: none;
            // visibility: hidden;
            max-width: 100%;
            verticle-align: middle;
        }
    }
`;

const StyledHeroTextTwo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
transform: translateX(-40px);

h2{
    color: #000;
    position: relative;
    perspective: 200px;
    letter-spacing: -2px;
    margin: 0;
    text-align: left;
    text-transform: uppercase;
    font-family: "Inter", san serif;
    font-weight: 400;
    font-size: 8em;
    line-height: 0.9em;
}
.hero__image{
    margin-right: 12px;
    max-width: 240px;
    flex: 1 0;
    img{
        // display: none;
        // visibility: hidden;
        max-width: 100%;
        verticle-align: middle;
    }
}
`;

const StyledHeroTextThree = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
transform: translateX(-40px);
h2{
    color: #000;
    margin-top: 16px;
    position: relative;
    perspective: 200px;
    letter-spacing: 4px;
    margin: 0;
    text-align: left;
    text-transform: uppercase;
    font-family: "Fraunces", serif;
    font-style: italic;
    font-weight: 300;
    font-size: 8em;
    line-height: 0.9em;
}
.hero__image{
    margin-right: 14px;
    margin-left: 14px;
    max-width: 240px;
    flex: 1 0;
    img{
        // display: none;
        // visibility: hidden;
        max-width: 100%;
        verticle-align: middle;
    }
}
`;

const StyledHeroTextFour = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
transform: translateX(-40px);
h2{
    color: #000;
    position: relative;
    perspective: 200px;
    letter-spacing: -2px;
    margin: 0;
    text-align: left;
    text-transform: uppercase;
    font-family: "Inter", san serif;
    font-weight: 400;
    font-size: 8em;
    line-height: 0.9em;
}
`;


const HeroText = () => {
  return (
    <StyledHeroWrapper>
        <StyledHeroTextOne>
            <div class="hero__image">
                <img src={ One } alt="cyber punk artwork"/>
            </div>
            <h2>Motion</h2>
        </StyledHeroTextOne>
        <StyledHeroTextTwo>
            <h2>And</h2>
            <div class="hero__image">
                <img src={ Two } alt="cyber punk artwork"/>
            </div>
        </StyledHeroTextTwo>
        <StyledHeroTextThree>
            <div class="hero__image">
                <img src={ Three } alt="cyber punk artwork"/>
            </div>
            <h2>emotion</h2>
            <div class="hero__image">
                <img src={ Four } alt="cyber punk artwork"/>
            </div>
        </StyledHeroTextThree>
        <StyledHeroTextFour>
            <h2>designer</h2>
        </StyledHeroTextFour>

    </StyledHeroWrapper>
  )
}

export default HeroText