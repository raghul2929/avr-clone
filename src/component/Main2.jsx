import React from 'react'
import '../style/navbars.css'
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img4 from '../imgs/img4.jpg'
import img5 from '../imgs/img5.png' 
import img6 from '../imgs/img6.png'

function Main2() {
  return (
  <div className="main2">
    <div className='itembar'>
       <img src={img1} alt="" /><img src={img2} alt="" /><img src={img3}alt="" /><img src={img4} alt="" /><img src={img5} alt="" /><img src={img6} alt="" />

    </div>

  </div>
  )
}

export default Main2