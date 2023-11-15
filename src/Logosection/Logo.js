import React from 'react'
import './Logo.css'
import equinix from '../images/equinix.png'
import tower from '../images/tower.png'
import prologis from '../images/prologis.png'
import realty from '../images/realty.png'
function Logo() {
  return (
    <div>
      <div className='logo-container'>
<img src={prologis} alt='' />
<img src={tower} alt=''/>
<img src={equinix} alt=''/>
<img src={realty} alt='' />
   
</div>

    </div>
  )
}

export default Logo
