import React, { useEffect , useState } from 'react'
import ProductsData from '../data';
import Product from './Product';
import axios from 'axios'

const Productlist = () => {
    const[products,setProducts] = useState([]);

    const GetAllData = async()=>{
        const Productsdata = await axios.get("http://localhost:8080/products");
        console.log(Productsdata.data)
        setProducts(Productsdata.data)
    }

    useEffect(()=>{
        GetAllData();
    },[])

  return (
    <>
        <h1>product list</h1>

        {products.map((product)=>{
            // console.log(product)
            return <Product product={product}/>
        })}
    </>

  )
}

export default Productlist