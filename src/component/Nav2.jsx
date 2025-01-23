import React from 'react'
import img from'../imgs/logo.png'
import '../style/navbars.css'
function Nav2() {
  return (
    <div className="nav2">
        <div className="divi1"><img src={img} alt="logo" /></div>
        <div className="divi2"><input type="search" name="" id="" placeholder='search for(relationship,celebration,price)' /></div>
        <div className="divi3">
            <select name="" id="">
                <option value="">Todays Gold's Rate -22K-1GM:RS.7525/- </option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>

    </div>
  )
}

export default Nav2