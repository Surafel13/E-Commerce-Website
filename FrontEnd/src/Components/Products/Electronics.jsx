import React from 'react'
import { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';


function Electronics() {

    const [products, setProducts] = useState([]);
    const { cartItem, addToCart } = useCart();


    useEffect(() => {

        fetch('http://localhost:4000/api/product/getProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "CategoryId": 5 })
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
            {/* <div className='text-center mx-5' id='mensFashion'><h1>Electronics</h1><hr /></div> */}

            <div className='row  productDiv  mx-auto' >

                {
                    products.map((data, i) => {
                        return <div className='text-ceter pt-1 col-12 col-md-3 ' key={i} >
                            <div className="product-item bg-light mb-4 ml-2">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid  w-100" src={`http://localhost:4000/${data.ImgPath}`} alt={data.ProductName}
                                    />
                                    <div className="product-action" >
                                        <a className="btn btn-outline-dark btn-square" href="/ShopDetailPage`${data.ProductName}`">learn More</a>
                                        <a
                                            className="btn btn-outline-dark btn-square"
                                            href="#"
                                            onClick={() => clickHandler(data)}                                        >Buy</a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <a className="h6 text-decoration-none text-truncate" href="">{data.ProductName}</a>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>${data.Price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Electronics
