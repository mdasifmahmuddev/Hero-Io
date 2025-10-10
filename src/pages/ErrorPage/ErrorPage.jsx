import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppError from '../../assets/App-Error.png'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
       
        <div className="mb-8 flex justify-center">
          <img 
            src={AppError} 
            alt="Error" 
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

       
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Oops!
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Something Went Wrong
          </h2>
          

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
            >
              Go Back
            </button>
          </div>
        </div>

       
        
      </div>
    </div>
  )
}

export default ErrorPage