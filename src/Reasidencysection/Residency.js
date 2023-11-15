import React from 'react'
import './Residency.css'
import r1 from '../images/r1.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'

function Residency() {
  return (
    <div>
      <div className="residency-container " id='Residency'>
<div className="residency-left">
    <div className="residency-heading">
        <h2>Best Choises</h2>
        <h1>POPULAR RESIDENCIES</h1>
    </div>
    <div className="residency-images">
        <div className="r1 img residency1">
<img src={r1} alt="" />
<div className="price"><span>$</span> 4723</div>
<div className="card-heading">Aliva Priva Jardin</div>
<div className="card-para">Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</div>
        </div>
        <div className="r2 img">
<img src={r2} alt="" />
<div className="price"><span>$</span> 7723</div>
<div className="card-heading">Asatti Garden City</div>
<div className="card-para">Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</div>
        </div>
        <div className="r3 img">
<img src={r3} alt="" />
<div className="price"><span>$</span> 4723</div>
<div className="card-heading">Citralan Puri Serang</div>
<div className="card-para">Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</div>
        </div>
        <div className="r4 img">
<img src={r1} alt="" />
<div className="price"><span>$</span> 4723</div>
<div className="card-heading">Aliva Priva Jardin</div>
<div className="card-para">Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</div>
        </div>
    
       
    </div>
</div>

      </div>
    </div>
  )
}

export default Residency
