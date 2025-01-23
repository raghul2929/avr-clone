import React from 'react'
import '../style/navbars.css'
import item1 from '../imgs/item1.jpg'
import item2 from '../imgs/item2.jpg'

function Main3() {
  return (
    <div className="main3">
        
       <main>
       <div className="item1">
            <p>TRENDING </p>
            <p>Now</p>
            <button>VIEW ALL</button>
        </div>
        <div className="item2">
            <img src={item1} alt="" />
           <input type="button" value="BUY NOW" />
           <p>Ganesha Casting Pendant</p>
           <span>Rs 30,685</span>
           </div>
        <div className="item3">
           <img src={item2} alt="" />
           <input type="button" value="BUY NOW" />
           <p>Ganesha Casting Pendant</p>
           <span>Rs 40,366</span>
           
        </div>
       </main>
    </div>
  )
}

export default Main3