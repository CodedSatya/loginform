import React from 'react'
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {users} from '../Database/Userdata'

const Login = () => {


    const navigate = useNavigate();
  


    const [value,setValue] = useState('');
    const [pass,setPass] = useState('');


    
    const handleSubmit = (e) => {
        console.log('A name was submitted: ' + value);
        console.log('A password was submitted: ' + pass);

        if (value!=='' && pass!=='') {
            users.map((user)=>{
                if ((value === user.username || value === user.email || value === user.phone) && user.password===pass) {
                    console.log('Login Successful');
                    console.log('Welcome back ',user.username);
                    navigate('/home');
                    
                }
                else{
                    navigate('/register');
                }
                return null;
            })

                   
        }else{
            alert('Please fill all the fields');
        }
        
        e.preventDefault();
    }


    


    const handleChange = (e) => {

        setValue(e.target.value);
    }
    const handlePass = (e) => {
    
        setPass(e.target.value);
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='backdrop-blur-xl px-16 py-20 text-white rounded-xl fixed mx-auto my-auto border-2'>

        <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-4'>

            <label htmlFor="username">Username :
            </label>
                <input type="text" value={value} placeholder='Username...' onChange={handleChange} className='bg-transparent border border-collapse py-[5px] rounded-md' id='username'/>
            <label htmlFor="password">Password :
            </label>
                <input type="password" value={pass} placeholder='Password...' onChange={handlePass} className=' bg-transparent border border-collapse py-[5px] rounded-md' id='password'/>
            <input className='bg-gradient-to-r from-blue-600 to-blue-400 text-white
             rounded py-4 text-2xl cursor-pointer' type="submit" value="Login" />
            <div className='text-center'>
               <Link to='/register'> Register?</Link>
            </div>
        </form>

        </div>
    </div>
  )
}


export default Login