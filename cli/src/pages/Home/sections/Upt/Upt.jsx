import React from 'react'
import { GoPackage, GoUnlock } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import './Upt.scss'
function Upt() {
    return (
        <div className='Upt-section'>
            <div className="container max-w-[1140px]">
                <div className="row mt-44">
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <GoPackage />
                            <h2>Free Shipping Method</h2>
                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <GoUnlock />
                            <h2>Free Shipping Method</h2>
                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <TfiReload />
                            <h2>Free Shipping Method</h2>
                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upt