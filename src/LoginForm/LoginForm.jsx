import React,{useState} from 'react'
import {FaLock, FaUser} from 'react-icons/fa'
import './LoginForm.css'

const LoginForm = () => {
    const [email, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        try{
            const response = await fetch('https://your-api-endpoint.com/login',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email,password}),
            })
            const data = await response.json();
            if(response.ok && data.token){
                localStorage.setItem('authToken', data.token);
                // Redirect to dashboard or another page
            }else{
                setError(data.message || 'Login failed');
            }
        }catch(err){
            setError('An error occurred. Please try again.')

        }
        }
  return (
    <div className='login-page'>
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                {/* Username container will be here */}
                <div className="input-container">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Username' value={email} onChange={(e) => setUsername(e.target.value)} required/>
                </div>

                {/* Password container will be here */}
                <div className="input-container">
                    <FaLock className='icon'/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

                </div>
                {/*Options container */}
                <div className="options">
                    <label>
                        <input type='checkbox' /> Remember me
                    </label>
                </div>
                {error && <div style={{color:'red', marginBottom:'10px'}}>{error}</div>}

                <button type='submit'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default LoginForm