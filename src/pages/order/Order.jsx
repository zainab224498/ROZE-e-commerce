import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  console.log(userid)
  const context = useContext(myContext)
  const { mode, loading, order } = context
  return (
<Layout>
  <div className="h-full pb-24 pt-20 mx-4">
    {loading ? (
      <Loader />
    ) : (
      <>
        {order.filter((obj) => obj.userid === userid).length > 0 ? (
          <div className="h-full">
                <h1 class="flex justify-center items-center text-3xl font-medium title-font mb-10 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Orders</h1>
            {order
              .filter((obj) => obj.userid === userid)
              .map((order) => (
                <div className="flex flex-col mx-auto max-w-5xl justify-center items-center px-6 md:flex md:space-x-6 xl:px-0  border-2 rounded-lg p-4 my-4">
                  {order.cartItems.map((item) => (
                    <div className="rounded-lg md:w-2/3">
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === 'dark' ? '#282c34' : '',
                          color: mode === 'dark' ? 'white' : '',
                        }}
                      >
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2
                              className="text-lg font-bold text-gray-900"
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {item.title}
                            </h2>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {item.description}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          <h2 className="text-center text-3xl text-black">NO ORDER</h2>
        )}
      </>
    )}
  </div>
</Layout>
  )
}

export default Order

