import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useState} from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [LetterClass, setLetterClass] = useState ('text-animate')

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            LetterClass={LetterClass}
                            strArray={['A','b','o','u','t',' ','M','e']}
                            idx={10}
                        />
                    </h1>
                    <p>
                        With the development of the world of technology, I am very ambitious to learn something that will be useful in the future. I really want to help people around me to feel the ease and time saving of using it together
                    </p>
                    <p>
                        I am very confident in making all the technologies that will develop in the future. I will always try to complete all projects given to me and will be enthusiastic to solve any problems that will occur. Apart from that project, I will also create my own project which can help many other people because the development of technology means that we cannot give up on new things.
                    </p>
                    <p>
                        I find it easy to work in a team and discuss a project. I also want to help people in their difficulties working on projects and if I am in the position of ignorance as a programmer, first I will find out about the problem independently and study it.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#dd0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
                        </div>
                    </div>

                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About