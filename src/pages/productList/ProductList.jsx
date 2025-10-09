import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getStoredProduct } from '../../utility/addToDb';
import Products from '../Products/Products';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storeProductData = getStoredProduct();
        const convertedProduct = storeProductData.map(id => parseInt(id));
        const myInstallList = data.filter(product => convertedProduct.includes(product.id));
        setProductList(myInstallList);
    }, [data]);

    return (
        <>

        <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>


        {productList.map(p => (
            <Products key={p.id} singleProduct={p} />
        ))}
        </>
    )
}

export default ProductList;
