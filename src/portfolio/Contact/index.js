import { BsLinkedin,BsInstagram } from "react-icons/bs"

import { FaSquareXTwitter } from "react-icons/fa6"

import { FaFacebook,FaGithub } from "react-icons/fa"



import './index.css'

const Contact = ()=>(
    <div className='contact-container' id='CONTACT'>
        <div className='social-container'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kuppi-reddy-jaya-surya-prakash-reddy-14898922b/'>
                <BsLinkedin style={{color:"#000000",fontSize:30}}/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/jayasuryaprakash_29/'>
                <BsInstagram style={{color:"#000000",fontSize:30}}/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://x.com/JayaKuppi/'>
                <FaSquareXTwitter style={{color:"#000000",fontSize:30}}/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/jayasuryareddy.k.9/'>
                <FaFacebook style={{color:"#000000",fontSize:30}}/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Jayasuryaprakashreddy333'>
                <FaGithub style={{color:"#000000",fontSize:30}}/>
            </a>
        </div>
        <p className="contact-para">&copy; 2024 surya portfolio. All rights reserved.</p>
    </div>
)

export default Contact