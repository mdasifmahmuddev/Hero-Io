import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDb } from '../../utility/addToDb';

const ProductDetails = () => {
    const {id} =useParams ();
    const productId =parseInt(id);
    const data =useLoaderData();
    const singleProduct = data.find(product =>product.id === productId )
     const {image,title}= singleProduct ; 
    
     const handleInstallApp = id =>{ 

      addToStoreDb(id);

     }



  return (
    <div>
        <img src={image} alt="" />
        <h1>{title}</h1>
     <button onClick={()=>handleInstallApp(id)} className="btn btn-primary">Install Now</button>



    </div>
  )
}

export default ProductDetails