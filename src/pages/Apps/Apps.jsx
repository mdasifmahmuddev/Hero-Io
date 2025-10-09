import React from "react";
import { App } from "../App/App";
import { useLoaderData } from "react-router";

const Apps = () => {
  const data = useLoaderData();  

  return (
    <div className="px-4 py-6">
     <h1 className="text-center text-2xl font-semibold mb-2">Our All Applications</h1>
      <p className='text-gray-400 text-center mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((singleProduct) => (
          <App key={singleProduct.id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default Apps;