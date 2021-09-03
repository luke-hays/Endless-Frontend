import React from 'react'
import logo from '../assets/img/logo-endless.svg'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='innerContent'>
                <img src={logo} alt="Endless Logo" />
            </div>
        </div>
    )
}

export default Header