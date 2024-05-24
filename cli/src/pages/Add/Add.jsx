import React, { useEffect, useState } from 'react'
import './Add.scss'
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
    const navigate = useNavigate()
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:1212/api/products/')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    let userSchema = object({
        name: string().required(),
        price: number().required().positive(),
        img: string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: null,
            img: ''
        },
        onSubmit: values => {
            axios.post('http://localhost:1212/api/products/', values)
            alert('success')
            navigate('/')
        },
        validationSchema: userSchema
    });

    return (
        <div className='Add-container'>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <input onChange={formik.handleChange}
                        value={formik.values.name}
                        className='w-[300px]' type="text" placeholder='name' name='name' />
                    {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        className='w-[300px]' type="number" placeholder='price' name='price' />
                    {formik.errors.price && <p style={{ color: "red" }}>{formik.errors.price}</p>}

                    <input onChange={formik.handleChange}
                        value={formik.values.img} className='w-[300px]' type="text" placeholder='image src' name='img' />
                    {formik.errors.img && <p style={{ color: "red" }}>{formik.errors.img}</p>}

                    <button>add</button>
                </form>
                <div class="relative overflow-x-auto mt-20">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data.map(elem => {
                                return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {elem.name}
                                    </th>
                                    <td class="px-6 py-4 w-[150px]">
                                        <img src={elem.img} alt="" />
                                    </td>
                                    <td class="px-6 py-4">
                                        {elem.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        <button onClick={() => {
                                            axios.delete(`http://localhost:1212/api/products/${elem._id}`)
                                        }} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
                                    </td>
                                </tr>)
                            }) : ''}
                        </tbody>
                    </table>
                </div>
            </div>




        </div>
    )
}

export default Add