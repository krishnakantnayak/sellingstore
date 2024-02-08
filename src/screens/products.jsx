import React from 'react';
import NewProdForm from '../components/product/NewProdForm';
import {  useSelector } from 'react-redux';
import ProductTile from '../components/product/productTile'

export default function Products(){
    const prods=useSelector((state)=>state.products);
    return (
        <>
        <h1>Products Page</h1>

        <NewProdForm/>
        <div className='d-flex flex-wrap justify-content-center'>
            {prods.map((prod)=>{
                return(<ProductTile title={prod.name} content={prod.price}/>)
            })}
        </div>
        
        </>
    )
}