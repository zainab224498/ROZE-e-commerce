import React from 'react'
import { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import { updatePassword } from 'firebase/auth';

function UpdateClothe() {
    const context = useContext(myContext);
    const { clothes, setClothes, updateClothe } = context

    console.log(clothes)
    return (
        <div>
            <div className=' flex justify-center items-center py-14'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Clothe</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={clothes.title}
                            onChange={(e) => setClothes({ ...clothes, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Clothe title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={clothes.price}
                            onChange={(e) => setClothes({ ...clothes, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Clothe price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={clothes.imageUrl}
                            onChange={(e) => setClothes({ ...clothes, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Clothe imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={clothes.category}
                            onChange={(e) => setClothes({ ...clothes, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Clothe category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                            value={clothes.description}
                            onChange={(e) => setClothes({ ...clothes, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Clothe desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateClothe}
                            className=' bg-pink-600 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Update Clothe
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateClothe