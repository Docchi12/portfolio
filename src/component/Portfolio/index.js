import React from "react"; 
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters';
import {useState} from 'react'
import portfolioData from '../../Data/portfolio.json'

const Portfolio = () => {

    const [LetterClass, setLetterClass] = useState ('text-animate');
    console.log(portfolioData);

    const renderPortfolio = (portfolio) => {
        return(
            <div className="images-container">
                {
                    portfolio.map((port, idx) =>{
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >view</button>
                                </div>
                            </div>
                            
                        )
                    })
                }

            </div>
        );
    } 

    return (
        <>       
        <div className="container portfolio-page">
        <h1 className="page-title">
            <AnimatedLetters
                LetterClass={LetterClass}
                strArray={'Portfolio'.split('')}
                idx={15}
            />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="pacman" />
        </>

    )
}

export default Portfolio