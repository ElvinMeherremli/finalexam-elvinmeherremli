import React from 'react'
import './News.scss'
function News() {
    return (
        <div className='News-section'>
            <div className="wrapper">
                <img className='man' src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png" alt="" />
                <div className="content">
                    <div className="text">
                        <h2>Get Our <br />
                            Latest Offers News</h2>
                        <p>Subscribe news latter</p>
                    </div>
                    <div className="input">
                        <input type="mail" placeholder='your email here' />
                        <button>Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News