import React from 'react'


const Home = ({user}) => {


  return (
    <div className='h-screen'>
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-white text-4xl font-bold  px-8 py-6 border-4 backdrop-blur-sm fixed'>Welcome Back{user}</h1>
        </div>
    </div>
  )
}

export default Home