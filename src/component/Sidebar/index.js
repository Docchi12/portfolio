import {Link, NavLink} from 'react-router-dom'
import './index.scss'; 
import LogoS from '../../assets/images/logo-m.png';
import LogoSubtitle from'../../assets/images/Muhdor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faCertificate, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faLinkedin, faTelegram, } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='Muhdor'/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="myskill-link" to='/myskill'>
                <FontAwesomeIcon icon={faBook} color='#4d4d4e'/>
            </NavLink>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="portfolio-link" to='/portfolio'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
            </NavLink>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="certificate-link" to='/certificate'>
                <FontAwesomeIcon icon={faCertificate} color='#4d4d4e'/>
            </NavLink>
            <NavLink  onClick={() => setShowNav(false)} exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            
            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color='#5f9ea0'
                size='3x'
                className='close-icon'
            />

        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://gitlab.com/' 
                >
                    <FontAwesomeIcon icon={faGitlab} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='' //COMING SOON
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://web.telegram.org/a/' 
                >
                    <FontAwesomeIcon icon={faTelegram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color='#5f9ea0'
            size='3x'
            className='hamburger-icon'
        />
    </div>
    )
}

export default Sidebar