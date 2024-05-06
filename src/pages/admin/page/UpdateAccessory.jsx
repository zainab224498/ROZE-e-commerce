import React from 'react'
import { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import { updatePassword } from 'firebase/auth';

function UpdateAccessory() {
    const context = useContext(myContext);
    const { accessories, setAccessories, updateAccessory } = context

    console.log(accessories)
    return (
        <div>
            <div className=' flex justify-center items-center py-14'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Accessory</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={accessories.title}
                            onChange={(e) => setAccessories({ ...accessories, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Accessory title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={accessories.price}
                            onChange={(e) => setAccessories({ ...accessories, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Accessory price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={accessories.imageUrl}
                            onChange={(e) => setAccessories({ ...accessories, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Accessory imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={accessories.category}
                            onChange={(e) => setAccessories({ ...accessories, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Accessory category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                            value={accessories.description}
                            onChange={(e) => setAccessories({ ...accessories, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Accessory desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateAccessory}
                            className=' bg-pink-600 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Update Accessory
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateAccessory