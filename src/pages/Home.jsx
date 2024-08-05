import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../components/context/CoinContext'
import { Link } from 'react-router-dom'
const Home = () => {
    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')

    const inputHandler = (e) =>{
        setInput(e.target.value)
        if(e.target.value === ''){
            setDisplayCoin(allCoin)
        }

    }

    const searchHandler = async(e) =>{
        e.preventDefault()
       const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLocaleLowerCase())
        })
        setDisplayCoin(coins)

    }
    useEffect(()=>{
        setDisplayCoin(allCoin)
        console.log(currency)
    },[allCoin])
  return (
   <div className=' px-[10px] pb-[100px]'>
    <div className=' max-w-[600px] my-[40px] md:my-[80px] gap-y-3 mx-auto flex flex-col items-center text-center'>
        <h1 className=' font-semibold text-white text-[40px] md:text-[50px]'>Largest <br/> Crypto Marketplace</h1>
        <p className=' w-[70%] text-[#e3e3e3] leading-[1.5]'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos</p>
        <form onSubmit={searchHandler} className='p-2 w-[70%] md:w-[80%] bg-white rounded-[5px] text-[12px] md:text-[20px] flex justify-between items-center gap-[10px]'>
            <input onChange={inputHandler} list='coinlist' className='flex flex-1 outline-none border-none pl-[4px] md:pl-[10px]' type='text' placeholder='search crypto' value={input} required/>

            <datalist className=' w-[40px] overflow-y-scroll' id='coinlist'>
                {allCoin.map((item, index)=>(
                    <option value={item.name} key={index}/>
                ))}
            </datalist>
            <button className=' border-none bg-[#7927ff] text-white text-[10px] md:text-[16px] py-2 px-3 md:py-[10px] md:px-[30px] rounded-[5px] cursor-pointer'>Search</button>
        </form>
    </div>
    <div className=' max-w-[800px] m-auto bg-crypto-bg rounded-[15px]'>
        <div className=' grid text-white grid-cols-[0.5fr_2fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-5 border-b-[1px] border-solid border-b-[#3c3c3c]'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H change</p>
            <p className='hidden md:block md:text-right'>Market Cap</p>
        </div>
        
        {
            displayCoin.slice(0,10).map((item, index)=>(
                <Link to={`/coin/${item.id}`} key={index} className='max-sm:text-[12px] last:border-none grid-cols-[0.5fr_2fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] grid text-white  py-[15px] px-5 border-b-[1px] border-solid border-b-[#3c3c3c]'>
                    <p>{item.market_cap_rank}</p>
                    <div className=' flex items-center gap-1 md:gap-[10px]'>
                        <img className=' w-[20px] md:w-[35px]' src={item.image} alt=''/>
                        <p>{item.name + " - " + item.symbol}</p>
                    </div>
                    <p className=' text-white'>{currency.symbol} {item.current_price.toLocaleString()}</p>
                    <p className={` text-center ${item.price_change_percentage_24h>0?' text-green-400': 'text-red-400'}`}>{Math.round(Math.floor(item.price_change_percentage_24h*100)/100)/1000000}</p>
                    <p className=' hidden md:block md:text-right'>{currency.symbol}{item.market_cap.toLocaleString()}</p>

                </Link>
            ))
        }
    </div>

   </div>
  )
}

export default Home