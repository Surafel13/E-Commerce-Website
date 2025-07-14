import React from 'react'
import { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router';


function MensFashion() {


    const [products, setProducts] = useState([]);
    const { cartItem, addToCart } = useCart();


    useEffect(() => {

        fetch('http://localhost:3000/api/product/getProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "CategoryId": 2 })
        })
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))


    }, []);

    const clickHandler = (product) => {
        addToCart(product)
    }
    return (
        <>

            <div className='text-center mx-5' id='mensFashion'><h1>Women's Fashion</h1><hr /></div>

            <div className='row  productDiv  mx-auto' >
                {
                    products.map((data, i) => {
                        return <div className='text-ceter pt-1 col-12 col-md-3 ' key={i} >
                            <div className="product-item bg-light mb-4 ml-2">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid  w-100" src={`http://localhost:3000/${data.ImgPath}`} alt={data.ProductName}
                                    />
                                    <div className="product-action" >
                                        <a className="btn btn-outline-dark btn-square" href={`Shop/ShopDetailPage/${data.ProductName}`}  >learn More</a>
                                        <Link
                                            className="btn btn-outline-dark btn-square"
                                            to="#"
                                            onClick={() => clickHandler(data)}>Buy</Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <Link className="h6 text-decoration-none text-truncate" to="">{data.ProductName}</Link>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>{data.Price}ETB</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </ >
    )
}

export default MensFashion
