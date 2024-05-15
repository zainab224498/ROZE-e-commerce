import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import BagsFilter from '../../components/filter/BagsFilter'

function Bags() {
    const context = useContext(myContext)
    const { mode, bag, searchkey, setSearchkey, filterType, setFilterType,
        filterPrice, setFilterPrice } = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems)

    // add to cart
    const addCart = (bag) => {
        dispatch(addToCart(bag))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div>
                <h1 class="flex justify-center items-center text-3xl font-medium title-font my-10 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Bags</h1>
                <BagsFilter />
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 md:py-16 mx-auto">

                        <div className="flex justify-center flex-wrap -m-4">
                            {bag.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                                .filter((obj) => obj.category.toLowerCase().includes(filterType))
                                .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                                    const { title, price, description, imageUrl, id } = item;
                                    return (
                                        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 drop-shadow-lg " >
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
                                                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>${price}</p>
                                                    <div className=" flex justify-center">
                                                        <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}




                        </div>

                    </div>
                </section >
            </div>
        </Layout>
    )
}

export default Bags
