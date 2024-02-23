import React from "react";
import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react'
import HTML from '../../assets/images/HTML.png';
import CSS from '../../assets/images/CSS.png';
import javascript from '../../assets/images/javascript.png';
import react from '../../assets/images/React.png';
import tailwind from '../..//assets/images/tailwind.png';
import gitlab from '../../assets/images/gitlab.png'

const Myskill = () => {

    const [LetterClass, setLetterClass] = useState ('text-animate');

    return (
        <>
        <div className="container myskill-page">
            <h1 className="page-skill">
                <AnimatedLetters
                    LetterClass={LetterClass}
                    strArray={'My Skill'.split('')}
                    idx={15}
                />
            </h1>
            <h2 className="description">
            <AnimatedLetters
                    LetterClass={LetterClass}
                    strArray={'My Language and Framework'.split('')}
                    idx={10}
                />
            </h2>
            <p>
                With the skills that I have, I will be able to create projects requested by clients or from my own projects. I will always develop my skills as technology develops
            </p>
        </div> 
        
        <div className="logo-skill">
            <div className="logo-apps">
                <img className="aps" src={HTML} alt="html" width='80px' />
                <img className="aps"  src={CSS} alt="css" width='80px'/>
                <img  className="aps"  src={javascript} alt="javascript" width='80px' />
                <img className="aps"   src={react} alt="react" width='80px'/>
                <img className="aps" src={tailwind} alt="tailwind" width='80px'/>
                <img className="aps" src={gitlab} alt="gitlab" width='80px' />
            </div>
        </div>
        <Loader type="pacman"/>
        </>   
    )

} 

export default Myskill