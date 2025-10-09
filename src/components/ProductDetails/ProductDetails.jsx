import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb, getStoredProduct } from '../../utility/addToDb';
import { Download, Star, Users } from 'lucide-react';
import { FaStar } from "react-icons/fa";
import { BiSolidMessageAltCheck } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const data = useLoaderData();
  const singleProduct = data.find(product => product.id === productId);

  if (!singleProduct) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleProduct;
  const [installed, setInstalled] = useState(getStoredProduct().includes(productId));

  const handleInstallApp = (id) => {
    addToStoreDb(id);
    setInstalled(true);
  }

  const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);
  const getRatingPercentage = (count) => (count / totalRatings) * 100;

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  const maxCount = Math.max(...ratings.map(r => r.count));
  const scale = Math.ceil(maxCount / 500) * 500;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="bg-white rounded-lg p-2 shadow-sm flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-50 h-50 object-contain"
            />
          </div>

          <div className="flex-1 w-full">
            <h1 className="text-2xl font-bold mb-1">{title}</h1>
            <p className="text-gray-600 mb-4 font-bold">
              Developed by <span className='text-blue-800'>{companyName}</span>
            </p>
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-600 mt-1 rounded-full"></div>

            <div className="flex flex-wrap gap-8 mb-4 mt-8">
              <div className="text-center">
                <Download className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Downloads</div>
                <div className="font-bold text-4xl">{formatDownloads(downloads)}</div>
              </div>
              <div className="text-center">
                <FaStar className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Average Ratings</div>
                <div className="font-bold text-4xl">{ratingAvg}</div>
              </div>
              <div className="text-center">
                <BiSolidMessageAltCheck className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Total Reviews</div>
                <div className="font-bold text-4xl">{formatDownloads(reviews)}</div>
              </div>
            </div>

            <button
              onClick={() => handleInstallApp(productId)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-md transition-colors"
            >
              {installed ? 'Installed' : `Install (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Ratings</h2>
        <div className="space-y-2">
          {[...ratings].reverse().map((rating, index) => {
            const starNum = 5 - index;
            const percentage = getRatingPercentage(rating.count);
            return (
              <div key={rating.name} className="flex items-center gap-3">
                <span className="text-sm font-medium w-12">{starNum} star</span>
                <div className="flex-1 bg-gray-200 rounded-sm  m-0.5 h-5 overflow-hidden">
                  <div
                    className="bg-orange-500 h-full   transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2 px-12">
          <span>0</span>
          <span>{Math.round(scale * 0.25)}</span>
          <span>{Math.round(scale * 0.5)}</span>
          <span>{Math.round(scale * 0.75)}</span>
          <span>{scale}</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Description</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
