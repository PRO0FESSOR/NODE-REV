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

    const handleDelete = async(id)=>{
        // const res = await axios.delete(`http://localhost:8080/products/${id}`);
        // if(res.data._id)
        // {
        //     setProducts(products.filter(p=>p._id!==res.data._id));
        // }
    }

    useEffect(()=>{
        GetAllData();
    },[])

  return (
    <>
        <h1>product list</h1>

        {products.map((product)=>{
            // console.log(product)
            return <Product product={product} handleDelete={handleDelete}/>
        })}
    </>

  )
}

export default Productlist