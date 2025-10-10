import React from 'react'
import Products from '../Products/Products'
import { NavLink } from 'react-router'

const Product = ({ data }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Trending Apps</h1>
      <p className='text-gray-400 text-center text-sm sm:text-base mb-4 sm:mb-6 px-2'>Explore All Trending Apps on the Market developed by us</p>
       
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {
          data.slice(0, 8).map((singleProduct) => (
            <Products key={singleProduct.id} singleProduct={singleProduct} />
          ))
        }
      </div>

      <div className='flex justify-center pt-6 sm:pt-8'>
        <NavLink to='./apps' className="btn btn-primary w-32 sm:w-40">Show All</NavLink>
      </div>
    </div>
  )
}

export default Product