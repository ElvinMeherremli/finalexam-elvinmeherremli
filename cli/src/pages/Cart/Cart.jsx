import React, { useEffect, useState } from 'react'
import { FaLocationPinLock } from 'react-icons/fa6'
import {Helmet} from "react-helmet";

function Cart() {
  const [basket, setBasket] = useState()
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('basket'))
    setBasket(data)
  }, [])
  return (
    <div className='container Cart-section'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                image
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                count
              </th>
              <th scope="col" class="px-6 py-3">
                inc dec remove
              </th>
            </tr>
          </thead>
          <tbody>

            {basket ? basket.map(elem => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {elem.name}
                </th>
                <td class="px-6 py-4">
                  <img className='w-[100px]' src={elem.img} alt="" />
                </td>
                <td class="px-6 py-4">
                  ${elem.price}
                </td>
                <td class="px-6 py-4">
                  {elem.count}
                </td>
                <td class="px-6 py-4">
                  <button onClick={() => {
                    const findItem = basket.find((x) => x._id == elem._id)
                    findItem.count += 1
                    setBasket([...basket])
                    localStorage.setItem('basket', JSON.stringify(basket))
                  }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">+</button>
                  <button onClick={() => {
                    const findItem = basket.find((x) => x._id == elem._id)
                    if (findItem.count > 1) {
                      findItem.count -= 1
                      setBasket([...basket])
                      localStorage.setItem('basket', JSON.stringify(basket))
                    } else {
                      const updatedBasket = basket.filter((x) => x._id != elem._id)
                      setBasket([...updatedBasket])
                      localStorage.setItem('basket', JSON.stringify(updatedBasket))
                    }
                  }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">-</button>
                  <button onClick={() => {
                    const updatedBasket = basket.filter((x) => x._id != elem._id)
                    setBasket([...updatedBasket])
                    localStorage.setItem('basket', JSON.stringify(updatedBasket))
                  }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">remove</button>
                </td>
              </tr>
            )) : ''}


          </tbody>
        </table>
        <button onClick={() => {
          if (window.confirm('are you sure?')) {
            setBasket([])
            localStorage.setItem('basket', JSON.stringify([]))
          }
        }} type="button" class="py-2.5 block mx-auto mt-10 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">order</button>

      </div>
    </div>
  )
}

export default Cart