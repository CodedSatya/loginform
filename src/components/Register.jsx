import React from 'react'
import {users} from '../Database/Userdata'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    }
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setrePass] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname!=='' && lname!=='' && pass!=='' && repass!=='' && email!=='' && phone!=='') {
            if (pass === repass) {
                console.log('A name was submitted: ' + fname);
                console.log('A name was submitted: ' + lname);
                console.log('A password was submitted: ' + pass);
                console.log('A repassword was submitted: ' + repass);
                console.log('A email was submitted: ' + email);
                console.log('A phone was submitted: ' + phone);
                
                users.push({
                    id:2,
                    fname:fname,
                    lname:lname,
                    username:fname+'_'+lname,
                    email:email,
                    phone:phone,
                    password:pass,
                });
                navigateToLogin();
            }
            else {
                alert('Passwords do not match');
            }
        }else{
            alert('Please fill all the fields');
        }
            
    }

    const handleFName = (e) => {
        setFName(e.target.value);
    }
    const handleLName = (e) => {
        setLName(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handlerePass = (e) => {
        setrePass(e.target.value);
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
    }
    const handlePhone= (e) => {
        setPhone(e.target.value);
    }


    return (
        <div className='h-screen flex justify-center items-center' >
            <div className='backdrop-blur-xl px-16 py-20 text-white rounded-xl fixed mx-auto my-auto border-2'>

                <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div>

                        <label htmlFor="firstname">First Name :</label>

                        <input type="text" value={fname} placeholder='Firstname...' onChange={handleFName} className='bg-transparent border border-collapse py-[5px] rounded-md' id='firstname' />

                        <label htmlFor="lastname">Last Name :</label>

                        <input type="text" value={lname} placeholder='Lastname...' onChange={handleLName} className='bg-transparent border border-collapse py-[5px] rounded-md' id='lastname' />
                    </div>

                    <label htmlFor="email">email :</label>

                    <input type="email" value={email} placeholder='Email...' onChange={handleEmail} className='bg-transparent border border-collapse py-[5px] rounded-md' id='email' />
                    
                    <label htmlFor="phone">Phone :</label>

                    <input type='tel' pattern='+[0-9]{4}-[0-9]{3}-[0-9]{3}' value={phone} placeholder='Phone...' onChange={handlePhone} className='bg-transparent border border-collapse py-[5px] rounded-md' id='phone' />

                    <div>


                        <label htmlFor="password">Password :</label>

                        <input type="password" value={pass} placeholder='password...' onChange={handlePass} className=' bg-transparent border border-collapse py-[5px] rounded-md' id='password' />

                        <label htmlFor="repassword">Re-enter Password :</label>

                        <input type="password" value={repass} placeholder='re-enter password...' onChange={handlerePass} className=' bg-transparent border border-collapse py-[5px] rounded-md' id='repassword' />
                    </div>


                    
                    <input className='bg-gradient-to-r from-blue-600 to-blue-400 text-white
                    rounded py-4 text-2xl cursor-pointer' type="submit" value="Register" />

                    <div className='text-center'>
                        <Link to='/'> Back to Login?</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Register