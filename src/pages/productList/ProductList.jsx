import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredProduct } from '../../utility/addToDb';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const data = useLoaderData();

  useEffect(() => {
    const storedIds = getStoredProduct().map(id => parseInt(id));
    const myInstallList = data.filter(product => storedIds.includes(product.id));
    setProductList(myInstallList);
  }, [data]);

  const handleUninstall = (id) => {
    const uninstalledProduct = productList.find(p => p.id === id);

    const updatedList = productList.filter(p => p.id !== id);
    setProductList(updatedList);

    const storedIds = getStoredProduct();
    const updatedIds = storedIds.filter(storedId => parseInt(storedId) !== id);
    localStorage.setItem('productList', JSON.stringify(updatedIds));

    const appTitle = uninstalledProduct ? uninstalledProduct.title : "App";

    toast.success(`${appTitle} uninstalled successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const sortedList = [...productList].sort((a, b) => {
    if (sortBy === 'size-high') return b.size - a.size;
    if (sortBy === 'size-low') return a.size - b.size;
    return 0;
  });

  return (
    <div className="max-w-full mx-auto p-4  sm:p-6">
      <div>
        <h1 className='text-xl sm:text-2xl p-3 sm:p-5 font-semibold flex items-center justify-center'>
          Your Installed Apps
        </h1>
        <p className='flex justify-center items-center text-gray-400 text-sm sm:text-base'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-base sm:text-xl font-semibold text-gray-700">
          {sortedList.length} {sortedList.length === 1 ? 'App' : 'Apps'} Found
        </div>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Download
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><a onClick={() => setSortBy('size-high')}>High to Low</a></li>
            <li><a onClick={() => setSortBy('size-low')}>Low to High</a></li>
          </ul>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="bg-base-100 rounded-lg shadow-sm p-6 text-center text-gray-500">
          No products added yet.
        </div>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md space-y-4">
          {sortedList.map((p) => (
            <li key={p.id} className="list-row flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <img className="size-10 rounded-box" src={p.image} alt={p.title} />
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    <div className='flex gap-2'>
                      <div className="font-medium gap-0.5 items-center text-green-900 flex">
                        <FaDownload /> <span>{p.downloads}M</span>
                      </div>
                      <div className="font-medium gap-0.5 items-center text-orange-900 flex">
                        <FaStar /> {p.ratingAvg}
                      </div>
                      <div className="font-medium gap-0.5 items-center text-gray-900 flex">
                        {p.size} MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(p.id)}
                className="bg-green-500 font-bold rounded-sm p-2 text-white flex items-center btn-square btn-ghost"
              >
                Uninstall
              </button>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-sm sm:text-base"
        toastClassName="text-sm sm:text-base"
        bodyClassName="text-sm sm:text-base"
        style={{
          fontSize: window.innerWidth < 640 ? '14px' : '16px',
          top: window.innerWidth < 640 ? '70px' : '1rem',
          right: window.innerWidth < 640 ? '10px' : '1rem',
          zIndex: 9999
        }}
      />
    </div>
  );
};

export default ProductList;
