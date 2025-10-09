import React from 'react'
import { Link } from "react-router";

export const App = ({ singleProduct }) => {
  const { image, title,id, companyName, description, size } = singleProduct;

  return (
   
     <Link to ={`/productDetails/${id}`}>


    <div className="card bg-base-100 w-80 shadow-md hover:shadow-lg transition-shadow duration-300">
      <figure className="p-3">
        <img
          className="h-[120px] object-contain"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="card-actions flex justify-between mt-2">
          <div className="badge badge-outline">{companyName}</div>
          <div className="badge badge-outline">{size} MB</div>
        </div>
      </div>
    </div>
     </Link>
    


  )
}
