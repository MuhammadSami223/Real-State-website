import React from 'react'
import CountUp from "react-countup"


function Stats() {
  return (
    <div>
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
  )
}

export default Stats
