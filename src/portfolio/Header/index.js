import {IoIosBriefcase,IoMdContact } from "react-icons/io"

import { GoHomeFill } from "react-icons/go"

import { BsExclamationCircleFill } from "react-icons/bs"



import './index.css'

const Header = ()=>(
        <nav className='nav-container'>
            <div className='container'>
                <a className='anchor' href='#HOME'>
                    <GoHomeFill style={{color:'#eaecee',fontSize:"18px"}} />
                    <p className='para'>Home</p>
                </a>
                <a className='anchor' href='#ABOUT'>
                    <BsExclamationCircleFill style={{color:'#eaecee',fontSize:"14px"}}/>
                    <p className='para'>About</p>
                </a>
                <a className='anchor' href='#PORTFOLIO'>
                    <IoIosBriefcase style={{color:'#eaecee',fontSize:"18px"}}/>
                    <p className='para'>Portfolio</p>
                </a>
                <a className='anchor' href='#CONTACT'>
                    <IoMdContact style={{color:'#eaecee',fontSize:"18px"}}/>
                    <p className='para'>Contact me</p>
                </a>
            </div>
        </nav>
    )


export default Header