import React from 'react'
import './MainTop.scss'

function MainTop() {
  return (
    <div className='MainTop-section'>
        <div className="wrapper">
            <img className='mr-[100px]' src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
            <div className="content mr-[200px]">
                <p className="title_top">60% DISCOUNT</p>
                <h1 className="title">WINTER <br /> COLLECTION</h1>
                <p className="title_bot">Best Cloth Collection By 2020!</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default MainTop