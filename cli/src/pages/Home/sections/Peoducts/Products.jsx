import React, { useContext, useEffect, useState } from 'react'
import { FaBalanceScale, FaRegStar } from "react-icons/fa";
import './Products.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsketContext } from '../../../../context/BasketContext';


function Products() {
    const {basket, setBasket} = useContext(BsketContext)
    const navigate = useNavigate()
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:1212/api/products/')
            .then(res => setData(res.data.data))
    }, [])

    const toggleBtn = (product) => {
        const foundItem = data.find((x) => x._id == product._id)
        let newWishList;
        if (foundItem) {
            newWishList = data.filter((x) => x._id != product._id)

        }
    }
    return (
        <div className='Products-section mt-20'>
            <div className="container max-w-[1140px]">
                <div className="title">
                    <h2>Latest Products</h2>
                    <div className="links">
                        <a href="#">All</a>
                        <a href="#">New</a>
                        <a href="#">Featured</a>
                        <a href="#">Offer</a>
                    </div>
                </div>
                <hr />
                
                <div className="row mt-4">
                    {data ? data.map(elem => {
                        return <div className="col-12 col-lg-4">
                            <div className="card">
                                <img src={elem.img} className='mx-auto' alt="" />
                                <div className="content">
                                    <div className="stars">
                                        <FaRegStar style={{ color: 'orange' }} />
                                        <FaRegStar style={{ color: 'orange' }} />
                                        <FaRegStar style={{ color: 'orange' }} />
                                        <FaRegStar style={{ color: 'gray' }} />
                                        <FaRegStar style={{ color: 'gray' }} />

                                    </div>
                                    <p className='name'>{elem.name}</p>
                                    <div className="price">${elem.price}</div>
                                    <div className="btns flex justify-center mt-2">
                                        <button onClick={() => {
                                            navigate(`/detail/${elem._id}`)
                                        }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">detail</button>
                                        <button onClick={() => {
                                            const foundItem = basket.find((x) => x._id == elem._id)
                                            if (foundItem) {
                                                foundItem.count += 1
                                                setBasket([...basket])
                                                localStorage.setItem('basket', JSON.stringify(basket))
                                            } else {
                                                const updateBasket = {...elem}
                                                updateBasket.count = 1
                                                setBasket((currentBasket) => {
                                                    currentBasket.push(updateBasket)
                                                    localStorage.setItem('basket', JSON.stringify(currentBasket) )
                                                    return [...currentBasket]
                                                })
                                            }
                                        }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">basket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : ''}

                </div>
            </div>
        </div>
    )
}

export default Products