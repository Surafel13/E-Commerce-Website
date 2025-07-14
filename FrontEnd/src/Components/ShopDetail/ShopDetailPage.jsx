import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext';
import { useParams } from 'react-router';

function ShopDetailPage() {


    const { productName } = useParams();
    const { allProducts, addToCart } = useCart();


    const singleProduct = allProducts.filter(item => item.ProductName == productName)
    console.log(singleProduct)

    const clickHandler = (product) => {
        addToCart(product);
    }





    return (
        <div>
            {
                singleProduct.map((data, i) => {
                    return <div className="container-fluid pb-5 " key={i}>
                        <div className="row px-xl-5">
                            <div className="col-lg-5 mb-30">
                                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner bg-light">
                                        <div className="carousel-item active">
                                            <img className="w-100 h-100" src={`http://localhost:3000/${data.ImgPath}`} alt="Image" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                                    </a>
                                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-7 h-auto mb-30">
                                <div className="h-100 bg-light p-30">
                                    <h3>Product Name : {data.ProductName}</h3>
                                    <h3 className="font-weight-semi-bold mb-4">Price : {data.Price}ETB</h3>
                                     <h5>Learn More <hr /></h5>
                                    <p className="mb-4">{data.Description}</p>

                                    <div className="text-center align-items-center mb-4 pt-2 ">
                                        <button className="btn btn-primary px-3 " onClick={clickHandler(data)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    )
}

export default ShopDetailPage
