import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

function Detail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(`http://localhost:1212/api/products/${id}`)
      .then(res => {
        setData(res.data.data)
      })
  }, [])
  console.log(data)
  return (
    <div className='container Detail-section'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {data ?
        <a href="#" class="flex flex-col mx-auto mt-32 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={data.img} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.price}</p>
          </div>
        </a>
        : ''}
        <button onClick={() => {
          navigate('/')
        }} type="button" class="block mx-auto mt-20 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">⬅ GO HOME </button>

    </div>
  )
}

export default Detail