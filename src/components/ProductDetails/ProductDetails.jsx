import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDb, getStoredProduct } from '../../utility/addToDb'
import { Download } from 'lucide-react'
import { FaStar } from 'react-icons/fa'
import { BiSolidMessageAltCheck } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const ProductDetails = () => {
  const { id } = useParams()
  const productId = parseInt(id)
  const data = useLoaderData()
  const singleProduct = data.find(product => product.id === productId)
  const [installed, setInstalled] = useState(getStoredProduct().includes(productId))
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!singleProduct) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="text-center py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-sm sm:text-base text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleProduct

  const handleInstallApp = () => {
    if (!installed) {
      addToStoreDb(productId)
      setInstalled(true)
      toast.success(`${title} installed successfully!`)
    }
  }

  const chartData = ratings.map((r, i) => ({
    name: `${i + 1} star`,
    count: r.count
  })).reverse()

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
    return num
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 shadow-none">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 gap-6">
          <div className="bg-white rounded-lg p-2 flex-shrink-0 mx-auto md:mx-0">
            <img
              src={image}
              alt={title}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 object-contain select-none pointer-events-none"
            />
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-xl sm:text-2xl font-bold mb-1 text-center md:text-left">{title}</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-4 font-bold text-center md:text-left">
              Developed by <span className='text-blue-800'>{companyName}</span>
            </p>
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-4 mt-6 sm:mt-8 justify-center md:justify-start">
              <div className="text-center">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Downloads</div>
                <div className="font-bold text-2xl sm:text-4xl">{formatDownloads(downloads)}</div>
              </div>
              <div className="text-center">
                <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Average Ratings</div>
                <div className="font-bold text-2xl sm:text-4xl">{ratingAvg}</div>
              </div>
              <div className="text-center">
                <BiSolidMessageAltCheck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Total Reviews</div>
                <div className="font-bold text-2xl sm:text-4xl">{formatDownloads(reviews)}</div>
              </div>
            </div>
            <button
              onClick={handleInstallApp}
              className={`w-full md:w-auto px-6 sm:px-8 py-2 rounded-md font-semibold text-white transition-colors focus:outline-none focus:ring-0 focus:border-0 hover:outline-none hover:border-none active:outline-none active:border-none ${
                installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
              }`}
              disabled={installed}
            >
              {installed ? 'Installed' : `Install (${size}MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Ratings</h2>
        <div className="w-full h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis
                type="number"
                domain={[0, 1200]}
                ticks={[0, 200, 400, 600, 700, 800, 1000, 1200]}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis dataKey="name" type="category" width={60} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => [value, "Count"]} labelFormatter={(label) => `Star: ${label}`} />
             <Bar dataKey="count" fill="#22C55E" radius={[5, 5, 5, 5]} />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-3">Description</h2>
        <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer 
        position="top-right" 
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-sm sm:text-base"
        toastClassName="text-sm sm:text-base"
        bodyClassName="text-sm sm:text-base"
        style={{ 
          fontSize: windowWidth < 640 ? '14px' : '16px',
          top: windowWidth < 640 ? '70px' : '1rem',
          right: windowWidth < 640 ? '10px' : '1rem',
          zIndex: 9999
        }}
      />
    </div>
  )
}

export default ProductDetails
