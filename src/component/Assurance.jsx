import React from 'react'
import assurance from '../imgs/assurence.png'
import ass1 from '../imgs/ass1.png'
import ass2 from '../imgs/ass2.png'
import ass3 from '../imgs/ass3.png'
import ass4 from '../imgs/ass4.png'
import ass5 from '../imgs/ass5.png'
import ass6 from '../imgs/ass6.png'

function Assurance() {
  return ( 
    <div className="assurance">
        <div className="assuranceinner">
        <section className='assurance1'>
            <h1>AVR Swarna Mahal</h1>
            <img src={assurance} alt="" />

</section>
<section className='assurance2'>
    <div className="division1">
        <div className="d1">
            <img src={ass1} alt="" />
        </div>
        <div className="d2">
        <img src={ass2} alt="" />
        </div>
        <div className="d3">
        <img src={ass3} alt="" />
        </div>
    </div>
    <div className="division2">
        <div className="div1">
        <img src={ass4} alt="" />
        </div>
        <div className="div2">
        <img src={ass5} alt="" />
        </div>
        <div className="div3">
        <img src={ass6} alt="" />
        </div>
    </div>

</section>
        </div>
        
    </div>
  )
}

export default Assurance