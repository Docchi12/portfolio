import {Link} from 'react-router-dom'
import './index.scss';
import Logo from './Logo';
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () =>{
    const [LetterClass, setLetterClass] = useState ('text-animate')
    const namaArray = ['','M','u','h','d','o','r']
    const JobArray = ['W','e','b','','D','e','v','e','l','o','p','e','r','.']

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={LetterClass}>H</span>
                <span className={`${LetterClass} _12`}>i 👋,</span>
                <br/>
                <span className={`${LetterClass} _13`}>I</span>
                <span className={`${LetterClass} _14` }>'m</span>
                <span className='name'>
                <AnimatedLetters LetterClass={LetterClass}
                strArray={namaArray}
                idx={11} />
                </span>
                <br/>
                <AnimatedLetters LetterClass={LetterClass} 
                strArray={JobArray}
                idx={14} />
                </h1>
                <h2>Frontend Developer | Backend Developer</h2>
                <Link to="https://wa.me//6285281008856" className='flat-button'>
                    <FontAwesomeIcon icon={faWhatsapp} color='#00FF00'/>
                    CONTACT ME 
                </Link>

            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;