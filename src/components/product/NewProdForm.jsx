import React, { useState } from 'react';
import { productAction } from '../../redux/reducers/productReducer';
import { useDispatch , useSelector } from 'react-redux';
import { addProduct } from '../../redux/reducers/productReducer';

function MyForm() {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    pickUpLoc: '',
    sellerName:'',
    sellerId:'',
    price:''
  });
  const uselector=useSelector((state)=>state.user);
  const dispatch=useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      sellerName: 'defeaultSeller',
      sellerId: 'defaultId',
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(form);
    dispatch(productAction.add(form));
    dispatch(addProduct({user:uselector.user,product:form}))
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={form.price} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} />
      </label>
      <label>
        Pickup Location:
        <input name="pickUpLoc" value={form.pickUpLoc} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;