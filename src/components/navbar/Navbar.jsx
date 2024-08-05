import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import arrowIcon from '../../assets/arrow_icon.png'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) =>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd", symbol:"$"})
        break
      }
      case "eur":{
        setCurrency({name:"eur", symbol:"€"})
        break
      }
      case "ngn":{
        setCurrency({name:"ngn", symbol:"₦"})
        break
      }
      default :{
        setCurrency({name:"usd", symbol:"$"})
        break
      }
    }

  }
  return (
    <div className=' flex items-center justify-between py-4 md:py-5 px-4 md:px-6 lg:px-20 text-[#ddd] border-b-[2px] border-solid border-b-[#3c3c3c]'>
        <Link to={'/'}>
        <img className=' max-sm:w-[120px] max-w-[12vw, 120px]' src={logo}/>
        </Link>
        <ul className=' md:flex gap-1 hidden md:gap-4 lg:gap-10 list-none '>
           <Link to={'/'}>
           <li className=' cursor-pointer'>Home</li>
           </Link> 
            <li className=' cursor-pointer'>Features</li>
            <li className=' cursor-pointer'>Pricing</li>
            <li className=' cursor-pointer'>Blog</li>
        </ul>

        <div className=' flex items-center gap-3'>
            <select onChange={currencyHandler} className=' py-[1px] md:py-[5px] px-2 rounded-[6px] border-solid outline-none border-white border-[2px] bg-transparent text-white' >
                <option className=' max-sm:text-[8px] bg-[#09005c] text-white' value="usd">USD</option>
                <option className=' max-sm:text-[8px] bg-[#09005c] text-white' value="eur">EURO</option>
                <option className=' max-sm:text-[8px] bg-[#09005c] text-white' value="ngn">NAIRA</option>
            </select>
            <button className=' flex items-center gap-2  md:gap-2 px-2 py-1 md:py-2  md:px-6 text-[12px] md:text-[15px] font-medium text-[#393939] bg-white border-none rounded-[20px] cursor-pointer'>Sign up <img className=' w-[10px] md:w-[13px]' src={arrowIcon}/></button>
        </div>

    </div>
  )
}

export default Navbar