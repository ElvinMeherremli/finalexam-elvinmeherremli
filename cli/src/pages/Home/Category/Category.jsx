import React from 'react'
import './Category.scss'

function Category() {
    return (
        <div className='Category-section mt-[100px]'>
            <h2 className='text-center mb-[50px]'>Shop by Category</h2>
            <div className="container">
                <div className="wrapper flex gap-[80px] justify-center max-w-[100%]">
                    <div className="col-12 col-lg-4 mx-auto">
                        <div className="card card1">
                            <h3>Owmen`S</h3>
                            <button>Best New Deals</button>
                            <p className='new'>New Collection</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mx-auto">
                        <div className="card card2">
                            <p>Discount</p>
                            <h3>Winter Cloth</h3>
                            <span>New Collection</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mx-auto">
                        <div className="card card3">
                            <h3>Man`S Cloth</h3>
                            <button>Best New Deals</button>
                            <p className='new'>New Collection</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category