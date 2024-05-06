import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Nopage() {

  const context = useContext(myContext)
  const { mode } = context

  return (
    <Layout>
      <div className="flex items-center justify-center bg-pink-600 py-20 sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <p className='text-4xl  text-white'>That page doesn't exist!</p>
      </div>
    </Layout>
  )
}

export default Nopage
