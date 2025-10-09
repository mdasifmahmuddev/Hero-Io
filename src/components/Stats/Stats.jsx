import React from 'react'

function Stats() {
  return (
    <div className="w-full  max-w-7xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-indigo-500">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-white mb-6">
        Trusted by Millions, Built for You
      </h1>
      <div className="stats stats-vertical lg:stats-horizontal w-full text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6">
        <div className="stat text-center">
          <div className="stat-title uppercase text-sm opacity-80 text-white">Total Downloads</div>
          <div className="stat-value text-4xl font-bold">29.6M</div>
          <div className="stat-desc opacity-70 text-white">21% More Than Last Month</div>
        </div>
        <div className="stat text-center">
          <div className="stat-title uppercase text-sm opacity-80 text-white">Total Reviews</div>
          <div className="stat-value text-4xl font-bold">906K</div>
          <div className="stat-desc opacity-70 text-white">46% More Than Last Month</div>
        </div>
        <div className="stat text-center">
          <div className="stat-title uppercase text-sm opacity-80 text-white">Active Apps</div>
          <div className="stat-value text-4xl font-bold">132+</div>
          <div className="stat-desc opacity-70 text-white">31 More Will Launch</div>
        </div>
      </div>
    </div>
  )
}

export default Stats
