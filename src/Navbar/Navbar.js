import React from 'react'
import Logo from '../images/logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className='container'>
        <div className='Navbar'>
            <div className='right'>
                <img src={Logo} alt='' width={100}/>
            </div>
            <div className='left'>
                <ul className='ul'>
                   <a href="#Home" className='a'><li className='list-item'>Home</li></a>
                   <a href="#Residency" className='a'> <li className='list-item'>Residencies</li></a>
                   <a href="#Value" className='a'> <li className='list-item'>Our Value</li></a>
                   <a href="#Started" className='a'><li className='list-item'>Get Started</li></a>
                   <a href="#Contact"> <button className='btn contact-btn'>Contact</button></a>
                </ul>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
