import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const Products = ({ singleProduct }) => {
  const { image, title, downloads, ratingAvg, size, id } = singleProduct;

  return (
    <Link to={`/productDetails/${id}`} className="block w-full">
      <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
        <figure className="relative w-full aspect-square bg-gray-50 p-4">
          <img
            className="w-full h-full object-cover rounded"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="text-center text-sm sm:text-base font-semibold line-clamp-2 min-h-[2.5rem]">
            {title}
          </h2>
          <div className="card-actions flex justify-between mt-2 gap-2">
            <div className="flex items-center gap-1 text-green-900 font-bold badge rounded-2xl bg-green-50 text-xs">
              <MdOutlineFileDownload />
              {downloads}
            </div>
            <div className="flex items-center gap-1 text-purple-900 font-bold badge bg-purple-100 text-xs">
              <FaStar />
              {ratingAvg} 
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
