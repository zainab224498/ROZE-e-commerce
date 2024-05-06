import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'

function about() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <Layout>
            <div>
                <section className="text-gray-600 body-font mb-10">
                    <div className="  container px-5 py-10 mx-auto">
                        <h1 className=' text-center text-3xl font-bold text-black mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>About Us</h1>
                        <div className="flex item-center justify-center m-4">
                            <div className="flex item-center justify-center p-4">
                                <div className="h-full text-center">
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    RoZe is an online store that contains many of the products <br/> you need and you can buy them easily through the website.<br/> It also contains easy-to-use interfaces for different users.
                                    <br/>we hope you like it
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default about