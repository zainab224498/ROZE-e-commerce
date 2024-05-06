import React from 'react'
import { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import { updatePassword } from 'firebase/auth';

function UpdateBag() {
    const context = useContext(myContext);
    const { bags, setBags, updateBag } = context

    console.log(bags)
    return (
        <div>
            <div className=' flex justify-center items-center py-14'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Bag</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={bags.title}
                            onChange={(e) => setBags({ ...bags, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Bag title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={bags.price}
                            onChange={(e) => setBags({ ...bags, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Bag price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={bags.imageUrl}
                            onChange={(e) => setBags({ ...bags, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Bag imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={bags.category}
                            onChange={(e) => setBags({ ...bags, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Bag category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                            value={bags.description}
                            onChange={(e) => setBags({ ...bags, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Bag desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateBag}
                            className=' bg-pink-600 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Update Bag
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateBag