import React from 'react'
import Products from '../Products/Products'

const Product = ({ data }) => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">This is Product Page</h1>

      {/* Responsive grid with spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 place-items-center">
       
       {
          data.slice(0, 8).map((singleProduct) => (
            <Products key={singleProduct.id} singleProduct={singleProduct} />
          ))

       }
     
     
       


      </div>

      <div className='flex justify-center pt-4'>
        <button className="btn btn-primary w-[100px]">Show All</button>

      </div>


    </div>
  )
}

export default Product
