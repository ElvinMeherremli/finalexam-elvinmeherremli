import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import './Header.scss'
import { BsketContext } from '../../context/BasketContext';

function Header() {
    const {basket} = useContext(BsketContext)
    return (
        <div className='header-section'>
            <div className="container ">
                <div className="wrapper">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" />
                        </Link>
                    </div>
                    <nav>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/add'}>Add</Link>
                        <Link className='flex gap-1 h-[30px] items-center px-2' style={{border: '1px solid gray', borderRadius: '10px'}} to={'/cart'}><FaCartShopping />{basket.length}</Link>
                        <Link to={'/wish'}><IoHeart /></Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header