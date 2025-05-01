import React, { useState } from 'react'
import { baseURL } from '../config/baseURL'
import axios from 'axios'
import toast from 'react-hot-toast'

const GlobalDataSettings = () => { 
    const [formData, setFormData] = useState({  dataKey: '', dataValue: '', type: '' })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${baseURL}/api/global-data/create `, formData)
            // console.log(response)
            toast.success('Data saved successfully')
            setIsSubmitting(true)
            setIsSuccess(false)
            setIsError(false)
            setFormData({ dataKey: '', dataValue: '', type: '' })
            setErrors({})
            setIsSuccess(true)
            setIsSubmitting(false)  
                    
        } catch (error) {
            setIsSubmitting(false)
            setIsSuccess(false)
            setIsError(true)
            setErrorMessage(error.message)
            toast.error('Data not saved')   
            console.log(error)
        }
    }   

  return (
    <>
    <div className='mx-auto px-4 py-10 max-w-3xl'>
        <h2 className='mb-6 font-bold text-2xl'>Global Data Settings</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block mb-2 font-bold text-gray-700'>Data Key</label>
                <input type='text' name='dataKey' value={formData.dataKey} onChange={handleChange} className='px-3 py-2 border border-gray-300 rounded w-full' />
                {errors.dataKey && <p className='text-red-500'>{errors.dataKey}</p>}
            </div>
            <div className='mb-4'>
                <label className='block mb-2 font-bold text-gray-700'>Data Value</label>
                <input type='text' name='dataValue' value={formData.dataValue} onChange={handleChange} className='px-3 py-2 border border-gray-300 rounded w-full' />
                {errors.dataValue && <p className='text-red-500'>{errors.dataValue}</p>}
            </div>
            <div className='mb-4'>
                <label className='block mb-2 font-bold text-gray-700'>Type</label>
                <input type='text' name='type' value={formData.type} onChange={handleChange} className='px-3 py-2 border border-gray-300 rounded w-full' />
                {errors.type && <p className='text-red-500'>{errors.type}</p>}
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold text-white'>Submit</button>
            {isSuccess && <p className='text-green-500'>Data saved successfully</p>}
            {isError && <p className='text-red-500'>{errorMessage}</p>} 
        </form>
    </div>
    </>
  )
}

export default GlobalDataSettings