'use client'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const baseUrl = import.meta.env.VITE_API_BASE_URL

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { user, loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })

        try {
            const res = await axios.post(`${baseUrl}/auth/login`, credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
            navigate('/')
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen -mt-28'>
            {/* login contiainer */}
            <div className="flex flex-col items-center pt-5 gap-3 max-w-[300px]">
                <input type="text" placeholder='username' className='border p-2 rounded outline-none text-sm' onChange={handleChange} id="username" />
                <input type="password" placeholder='password' className='border p-2 rounded outline-none text-sm' onChange={handleChange} id="password" />
                <button disabled={loading } onClick={handleLogin} className="rounded border border-blue-500 bg-blue-500 text-white w-full p-2">Login</button>
                {error && <span>{error.message}</span>}
            </div>

        </div>
    )
}

export default Login
