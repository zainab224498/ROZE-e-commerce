import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Navigate } from 'react-router-dom'

function BagCard() {
    const context = useContext(myContext)
    const { mode, bag, searchkey, filterType,
        filterPrice } = context;

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    // add to cart
    const addCart = (bag) => {
        dispatch(addToCart(bag))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])





    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class=" flex justify-center items-center flex-col  mb-6 lg:mb-10">
                    <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 p-2 bg-gradient-to-r from-fuchsia-900 via-pink-200 to-pink-400 text-transparent bg-clip-text animate-gradient">Our Latest Bags</h1>
                </div>

                <div className="flex justify-center flex-wrap -m-4">
                    {bag.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice)).slice(-4).map((item, index) => {
                            const { title, price, description, imageUrl, id } = item;
                            return (
                                <div className="p-4 lg:w-1/4 md:w-1/2  drop-shadow-lg " >
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <div className="flex justify-center cursor-pointer" >
                                            <Link to={`/baginfo/${id}`}>
                                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                            </Link>
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>ROZE</h2>
                                            <Link to={`/baginfo/${id}`}>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                            </Link>
                                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                            <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>$ {price}</p>
                                            <div className=" flex justify-center">
                                                <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                </div>
                {/* <div className=" flex justify-center">
                                            <button onClick={()=>addCart()} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                        </div> */}
            </div>
        </section >

    )
}

export default BagCard
