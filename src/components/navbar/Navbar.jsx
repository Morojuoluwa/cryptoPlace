import React from 'react'
import logo from '../../assets/logo.png'
import arrowIcon from '../../assets/arrow_icon.png'
const Navbar = () => {
  return (
    <div className=' flex items-center justify-between py-5 px-6 text-[#ddd] border-b-[2px] border-solid border-b-[#3c3c3c]'>
        <img className=' max-w-[12vw, 120px]' src={logo}/>
        <ul className=' flex gap-10 list-none '>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>Features</li>
            <li className=' cursor-pointer'>Pricing</li>
            <li className=' cursor-pointer'>Blog</li>
        </ul>

        <div className=' flex items-center gap-3'>
            <select className='py-[5px] px-2 rounded-[6px] border-solid outline-none border-white border-[2px] bg-transparent text-white' >
                <option className=' bg-[#09005c] text-white' value="USD">USD</option>
                <option className=' bg-[#09005c] text-white' value="EURO">EURO</option>
                <option className=' bg-[#09005c] text-white' value="NAIRA">NAIRA</option>
            </select>
            <button className=' flex items-center gap-2 py-2 px-6 text-[15px] font-medium text-[#393939] bg-white border-none rounded-[20px] cursor-pointer'>Sign up <img className=' w-[13px]' src={arrowIcon}/></button>
        </div>

    </div>
  )
}

export default Navbar