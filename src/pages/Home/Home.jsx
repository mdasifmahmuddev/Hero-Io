import React from 'react'
import Banner from '../../components/Banner/Banner'
import Product from '../Product/Product'
import {useLoaderData} from 'react-router'

const Home = () => {

  const data = useLoaderData();
  console.log(data);


  return (
     <>
     <Banner></Banner>
     <Product data={data} ></Product>
     
     </>
  )
}

export default Home