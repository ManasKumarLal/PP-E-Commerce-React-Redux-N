import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, image, price, title, category } = product
        return (
            <div key={id} className='flex justify-center'>
                <Link to={`/product/${id}`}>
                    <div className="card w-[90vw] md:w-[45vw] lg:w-[30vw] xl:w-[22vw] h-[500px] bg-base-100 shadow-xl p-5 hover:scale-[0.9] transition-all duration-300" id='card-container'>
                        <figure><img src={image} alt="" className='h-40 object-fill rounded-3xl' /></figure>
                        <div className="card-body">
                            <h2 className="card-title" id='card-title'>{title}</h2>
                            <div className="badge badge-accent mt-6"><b>$ {price}</b></div>
                            <p>{category}</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            {Object.keys(products).length === 0 ? <Loader /> : (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {renderList}
                </div>
            )}
        </>
    )
}

export default ProductComponents