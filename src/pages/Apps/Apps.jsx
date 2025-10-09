import React from "react";
import { App } from "../App/App";
import { useLoaderData } from "react-router";

const Apps = () => {
  const data = useLoaderData();  

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">This is Apps Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 place-items-center">
        {data?.map((singleProduct) => (
          <App key={singleProduct.id} singleProduct={singleProduct} />
        ))}
      </div>

       
       
    </div>
  );
};

export default Apps;
