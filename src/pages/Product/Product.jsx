import React from 'react'
import Products from '../Products/Products'
import { NavLink } from 'react-router'

const Product = ({ data }) => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-center text-2xl font-semibold mb-2">Trending Apps</h1>
      <p className='text-gray-400 text-center mb-4'>Explore All Trending Apps on the Market developed by us</p>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          data.slice(0, 8).map((singleProduct) => (
            <Products key={singleProduct.id} singleProduct={singleProduct} />
          ))
        }
      </div>

      <div className='flex justify-center pt-6'>
        <NavLink to='./apps' className="btn btn-primary w-32">Show All</NavLink>
      </div>
    </div>
  )
}

export default Product