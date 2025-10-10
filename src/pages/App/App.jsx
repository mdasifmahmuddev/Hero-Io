import React from 'react'
import { Link } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";


export const App = ({ singleProduct }) => {
  const { image, title, id, downloads, ratingAvg, size } = singleProduct;

  return (
    <Link to={`/appDetails/${id}`} className="block w-full">
      <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
        <figure className="relative w-full aspect-square bg-gray-50 p-4">
          <img
            className="w-full h-full object-cover rounded"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body p-3 sm:p-4">
          <h2 className="text-center text-xs sm:text-sm md:text-base font-semibold line-clamp-2 min-h-[2.5rem]">
            {title}
          </h2>
          <div className="card-actions flex justify-between mt-2 gap-2">
            <div className="text-green-900 font-bold badge rounded-2xl text-[10px] sm:text-xs"><MdOutlineFileDownload />
  <span>  {downloads }M  </span> 
 
 
 </div>
            <div className="text-purple-900 font-bold bg-purple-100 badge text-[10px] sm:text-xs"><FaStar />
 {ratingAvg} </div>
          </div>
        </div>
      </div>
    </Link>
  )
}