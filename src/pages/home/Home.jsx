import React from 'react'
import Layout from '../../components/layout/Layout'
import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import ClotheCard from '../../components/clotheCard/ClotheCard'
import ShoesCard from '../../components/shoesCard/ShoesCard'
import BagCard from '../../components/bagCard/BagCard'
import AccessoryCard from '../../components/accessoryCard/AccessoryCard'


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart )

 // console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"))
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"))
  }
  return (
    <Layout>
      {/* 
      <div className="flex gap-5 justify-center">
        <button className='bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className='bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      */}
      <HeroSection/>
      <ClotheCard/>
      <div className="flex justify-center mt-2 mb-2">
        <Link to={'/clothes'}>
          <button className=' font-medium bg-gray-300 px-20 py-3 rounded-xl hover:bg-pink-600 hover:text-white'>See more</button>
        </Link>
      </div>
      <ShoesCard/>
      <div className="flex justify-center mt-2 mb-12">
        <Link to={'/shoeses'}>
          <button className=' font-medium bg-gray-300 px-20 py-3 rounded-xl hover:bg-pink-600 hover:text-white'>See more</button>
        </Link>
      </div>
      <BagCard/>
      <div className="flex justify-center mt-2 mb-12">
        <Link to={'/bags'}>
          <button className=' font-medium bg-gray-300 px-20 py-3 rounded-xl hover:bg-pink-600 hover:text-white'>See more</button>
        </Link>
      </div>
      <AccessoryCard/>
      <div className="flex justify-center mt-2 mb-12">
        <Link to={'/accessories'}>
          <button className=' font-medium bg-gray-300 px-20 py-3 rounded-xl hover:bg-pink-600 hover:text-white'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home