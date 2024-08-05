import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../components/context/CoinContext'
import { BallTriangle, Triangle } from 'react-loader-spinner'
import LineChart from '../components/LineChart'
const Coin = () => {

  const {coinId} = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  
  const {currency} = useContext(CoinContext)

  const apiKey = import.meta.env.VITE_API_KEY

  const fetchCoinData = async() =>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': `${apiKey}`}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async() =>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': `${apiKey}`}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response =>setHistoricalData(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{

    fetchCoinData()
    fetchHistoricalData()
  }, [currency])

  if(coinData && historicalData){


    return (
      <div className=' py-0 px-6`'>
        <div className=' flex flex-col items-center gapx-5 mt-[100px] mx-auto mb-[30px]'>
          <img className=' max-w-[100px] mb-3' src={coinData.image.large} alt=''/>
          <p className=' text-[26px] md:text-[44px] text-white font-medium'><b>{coinData.name} {coinData.symbol.toUpperCase()}</b></p>
         
        </div>
        <div className=' w-[95%] md:max-w-[600px] m h-[250px] mx-auto'>
          <LineChart historicalData = {historicalData}/>
        </div>
        <div coin-info className='coin-info md:max-w-[600px] my-3 mx-5 md:my-[30px] md:mx-auto flex flex-col'>
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour high</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
       
      </div>
    )
  }else{
        return(

        
        <div className=' flex h-[100vh] justify-center items-center w-full'>
        <Triangle
        visible={true}
        height="50"
        width="50"
        color="#3fadfc"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
        )
  }
}

export default Coin