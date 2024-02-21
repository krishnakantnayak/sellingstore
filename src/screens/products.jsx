import React from 'react';
import NewProdForm from '../components/product/NewProdForm';
import {  useSelector } from 'react-redux';
import ProductTile from '../components/product/productTile'
import SignupForm from '../components/authComps/signup';
import SigninForm from '../components/authComps/signin';
import {auth} from '../config/firebase';
import { useEffect, useState } from 'react';


export default function Products(){
    const prods=useSelector((state)=>state.product);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        });
    }, []);
    if(currentUser){
        return (
            <>
            {console.log(currentUser)}
            <h1>Products Page</h1>
                <NewProdForm/>
                <div className='d-flex flex-wrap justify-content-center'>
                    {prods.products.map((prod)=>{
                        return(<ProductTile title={prod.name} content={prod.price}/>)
                    })}
                </div>
          
            </>
        )
    }else{
        return (
        <>
            <SignupForm/>
            <SigninForm/>
        </>
        )
    }

    
}