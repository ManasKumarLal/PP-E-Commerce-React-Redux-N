import React, { useEffect } from 'react'
import ProductComponents from './ProductComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../Redux/actions/ProductActions';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
        // eslint-disable-next-line
    },[])

  return (
    <div className='lg:mt-10'> 
      <ProductComponents/>
    </div>
  )
}

export default ProductListing