import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'

function ReturnPolicy() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <Layout>
            <div>
                <section className="text-gray-600 body-font mb-10">
                    <div className="  container px-5 py-10 mx-auto">
                        <h1 className=' text-center text-3xl font-bold text-black mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</h1>
                        <div className="flex item-center justify-center m-4">
                            <div className="flex item-center justify-center p-4">
                                <div className="h-full text-center">
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Are you not satisfied with your purchase?  Is your product damaged? <br/> Sorry to hear that! We’ll take care of it.<br/>
                                        All the promises we keep:
                                        <br/>
                                        <br/>

                                        &#8277; Free return of the product.
                                        <br/>
                                        <br/>
                                        &#8277; 30 days of reflection after receiving the product.
                                        <br/>
                                        <br/>
                                        &#8277; Do you want to change the product?<br/> We send you the new product on the same day of receipt.
                                        <br/>
                                        <br/>
                                        &#8277; Would you prefer us to refund your money?<br/> We will refund you within 3 days of receipt.
                                        <br/>
                                        <br/>
                                        &#8277; Is the product broken after 30 days? <br/> In that case, you have a minimum of 2 years warranty on it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default ReturnPolicy