import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const SITE_KYE = "6LdHuTArAAAAAMnDiZAzFJ-v-NjfAQi2QZ7Iop2z"

    const nevigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        reCaptchaVerified: false
    })
    const handleChange = (e) => {
        // e.target.value,
        // e.target.email

        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
    }
    const handleReacaptchaChange = (value) => {
        // console.log(value);
        const isVerified = value ? true : false
        // const isVerified = !!value;
        setFormData({
            ...formData,
            reCaptchaVerified: isVerified
            // reCaptchaVerified: !!value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email != "kk@gmail.com") return;
        console.log("1");

        if (formData.password != "123") return;
        console.log("2");
        if (!formData.reCaptchaVerified) return;
        console.log("3");

        nevigate("/d")
    }
    return (
        <div className='flex justify-center w-1/4 bg-blue-300 py-8 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-4xl text-center '>Login Form</h1>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor="" className='mb-4'>Enter Email</label>
                    <input type="text" name="email" id="email" className='text-2xl border-2 border-gray-300 p-3' onChange={handleChange} value={formData.email} />
                </div>

                <div className='mb-4 flex flex-col' >
                    <label htmlFor="" className='mb-4'>Enter Password</label>
                    <input type="password" name="password" id="password" className='text-2xl border-2 border-gray-300 p-3' onChange={handleChange} value={formData.password} />
                </div>
                <div className='mb-4'>
                    <ReCAPTCHA sitekey={SITE_KYE} onChange={handleReacaptchaChange} />
                </div>
                <div className='mb-4'>
                    <button type="submit" className='bg-gray-200 hover:bg-blue-700 border-2 py-2 px-4 rounded-lg'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login