import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddShoes() {

    const context = useContext(myContext);
    const { shoeses, setShoeses, addShoes } = context

    return (
        <div>
            <div className=' flex justify-center items-center py-14'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Shoes</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={shoeses.title || ''}
                            onChange={(e) => setShoeses({ ...shoeses, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Shoes title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={shoeses.price || ''}
                            onChange={(e) => setShoeses({ ...shoeses, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Shoes price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={shoeses.imageUrl || ''}
                            onChange={(e) => setShoeses({ ...shoeses, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Shoes imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={shoeses.category || ''}
                            onChange={(e) => setShoeses({ ...shoeses, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Shoes category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                            value={shoeses.description || ''}
                            onChange={(e) => setShoeses({ ...shoeses, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Shoes desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={addShoes}
                            className=' bg-pink-600 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Add Shoes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddShoes