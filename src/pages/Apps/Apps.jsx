import React, { useState, useMemo } from "react";
import { App } from "../App/App";
import { useLoaderData } from "react-router";

const Apps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const filteredApps = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

   
  const handleSearch = (e) => {
    setIsSearching(true);
    setSearchTerm(e.target.value);
     
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-center text-2xl font-semibold mb-2">Our All Applications</h1>
      <p className="text-gray-400 text-center mb-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="text-gray-600 font-semibold order-1 sm:order-1">
          ({filteredApps.length}) {filteredApps.length === 1 ? "App" : "Apps"} Found
        </div>

        <input
          type="text"
          placeholder="Search Apps"
          value={searchTerm}
          onChange={handleSearch}
          className="px-3 py-1 border border-gray-300 rounded-lg w-full sm:w-1/3 max-w-xs order-2 sm:order-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      {isSearching ? (
        <div className="flex items-center justify-center py-20">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          404 - No apps found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((singleProduct) => (
            <App key={singleProduct.id} singleProduct={singleProduct} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;