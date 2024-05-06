import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'

function ContactUs() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <Layout>
            <div>
                <section className="text-gray-600 body-font mb-10">
                    <div className="  container px-5 py-10 mx-auto">
                        <h1 className=' text-center text-3xl font-bold text-black mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</h1>
                        <div className="flex item-center justify-center m-4">
                            <div className="flex item-center justify-center p-4">
                                <div className="h-full text-center">
                                <p className=' text-center text-2xl font-bold text-black mb-2' style={{ color: mode === 'dark' ? 'white' : '' }}>Hello, Darling</p>
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                        Give us a call or send a note. <br/> we will happy to answer your questions.
                                    </p>
                                    <p className=' text-center text-2xl font-bold text-black my-4' style={{ color: mode === 'dark' ? 'white' : '' }}>CONTACT</p>
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                       rozestore@roze.com
                                    </p>
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                       +963 112233445
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

export default ContactUs