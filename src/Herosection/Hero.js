import React from 'react'
import  './Hero.css'
import Hero2 from'../images/hero.png'
import CountUp from "react-countup"

function Hero() {
  return (
    <div>
      <div className='hero-wrapper'id='Home'>
        <div className='hero-left'>
<div className='hero-heading'>
  <h1>Discover <br/> Most Suitable<br/> Property
</h1>
</div>
<div className='hero-para'>
  <p>Find a variety of properties that suit you very easilty
Forget all difficulties in finding a residence for you</p>
</div>
<div className='search-para'>
  <div>

<input type='text' />
<i class="fa fa-map-marker location" aria-hidden="true"></i>

<button className='btn hero-btn'>SEARCH</button>
  </div>
</div>
        </div>
        <div className='hero-right'>
<div className='hero-image'>
    <img src={Hero2}alt=''/>
</div>
        </div>
        <div className='stats'>
<div className='flexstats flexstats1'>
<span>
  <span className='count1'> <CountUp start={8800} end={9000} duration={4}/></span>
    <span className='plus'>+</span>
</span>
  <br/>
<span className='pro1'>Premium product</span>
        </div>
<div className='flexstats flexstats2'>
<span>
  <span className='count1'> <CountUp start={1800} end={2000} duration={4}/></span>
    <span className='plus'>+</span>
</span>
  <br/>
<span>Happy Customer</span>
        </div>
<div className='flexstats flexstats3'>
<span>
  <span className='count1 award-count'> <CountUp start={0} end={20} duration={4}/></span>
    <span className='plus'>+</span>
</span>
  <br/>
<span>Award Winning</span>

        </div>
        
        </div>
        
      </div>
      
    </div>
  )
}

export default Hero
