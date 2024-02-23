import React from "react";
import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useState} from 'react'
import certificateData from '../../Data/certificate.json';

const Certificate = () => {

    const [LetterClass, setLetterClass] = useState ('text-animate');
    console.log (certificateData);

    const renderCertificate = (certificate) => {
        return (
            <div className="certificate-container">
                {
                    certificate.map((port, idx) => {
                        return (
                            <div className="certificate-box" key={idx}>
                                <img 
                                src={port.cover} 
                                className="certificate-image"
                                alt="certificate"
                                />
                            <div className="certif-content">
                                <p className='certif-title'>{port.title}</p>
                                <h4 className="certif-description">{port.description}</h4>
                                <button className="certif-btn" onClick={() => window.open(port.url)}>View</button>
                            </div>
                            </div>
                        )
                    })   
                }

            </div>
        )
    }

    return (
        <>
        <div className="container certificate-page">
            <h1 className="page-certificate">
                <AnimatedLetters
                    LetterClass={LetterClass}
                    strArray={'Certificate'.split('')}
                    idx={15}
                />
            </h1>
            <div>{renderCertificate(certificateData.certificate)}</div>
        </div>
        <Loader type='pacman'/>
        </>
    );

}

export default Certificate