import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' text-center text-[10px] m-auto max-w-[80%] py-2 border-t-[1px] border-solid border-t-[#989898] md:text-[20px]'>
        <Link className='text-white' to='https://portfolio1-zeta-flame.vercel.app/'>
        Copyright @ 2024. Developed by Alpha_codes 
        </Link>
    </div>
  )
}

export default Footer