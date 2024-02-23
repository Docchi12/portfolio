import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {

    const [LetterClass, setLetterClass] = useState ('text-animate')
    const Form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
                            // (INGAT KALAU PAKAI EMAILJS, HARUS DISAMAKAN NAME INPUT NYA DI TEMPLATE ID BAGIAN EMAILJSNYA !!)
        emailjs
            .sendForm(
                'service_xv0hx58', // SERVICES ID
                'template_qc5aio6', //TEMPLATE ID
                Form.current,
                'AQHiGLkBO0S5buzEe' //Publik key API
            )
            .then(
                () => {
                    alert('Message Succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
    <> 
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    LetterClass={LetterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in taking freelance opportunities and I am very ambitious to work on projects according to the targets desired by the client, if they want to know me more deeply or need help on a project. Please contact me
                </p>
                <div className='contact-form'>
                    <form ref={Form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Muhammad Muhdor Al Fatih,
                <br/>
                Indonesia,
                <br/>
                JL.Tanah Merah Utara VI no.20 <br/>
                Surabaya<br/>
                <span>dedenalfatih02@gmail.com</span>

            </div>
            <div className='map-wrap'>
                <MapContainer center={[-7.224230190835626, 112.76960332742571]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[-7.224230190835626, 112.76960332742571]}>
                        <Popup> i'm lives here, come over for a cup of coffe </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
        <Loader type='pacman' />
    </>
    )

}


export default Contact