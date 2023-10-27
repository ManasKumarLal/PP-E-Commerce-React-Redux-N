import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts, removeSelectedProduct } from '../Redux/actions/ProductActions'
import Loader from '../Loader/Loader'

const ProductDetails = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.selectedProduct);
    const { image, title, price, category, description } = product;

    const { productId } = useParams();
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(selectedProducts(response.data))
    }

    useEffect(() => {
        fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
        // eslint-disable-next-line
    }, [productId])

    return (
        <div>
            {Object.keys(product).length === 0 ? <Loader/> : (
                <div className="hero min-h-[80vh] bg-base-100 px-10 mb-10">
                    <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-32">
                        <img src={image} className="rounded-lg shadow-2xl max-w-[300px] lg:max-w-[20vw]" alt=''/>
                        <div className='lg:w-[50vw]'>
                            <h1 className="text-3xl md:text-5xl font-medium">{title}</h1>
                            <div className="text-2xl font-bold mt-10 text-slate-600">$ {price}</div>
                            <p className="my-3 md:text-xl">{description}</p>
                            <p className="pb-14 font-bold">{category.charAt(0).toUpperCase()+category.slice(1)}</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
