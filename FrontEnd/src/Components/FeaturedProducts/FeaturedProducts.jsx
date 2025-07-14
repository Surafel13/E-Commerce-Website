import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router';

function FeaturedProducts() {

  const { allProducts, addToCart } = useCart();
  const ids = [4, 15, 9, 16]

  const products = allProducts.filter(item => ids.includes(item.ProductId));

  const clickHandler = (product) => {
    addToCart(product)
  }


  return (
    <div>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">

          {
            products.map((data, i) => {
              return <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={i}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={`http://localhost:3000/${data.ImgPath}`} alt="" />
                    <div className="product-action">
                      <Link className="btn btn-outline-dark btn-square" to={`Shop/ShopDetailPage/${data.ProductName}`}>
                        Learn More
                      </Link>
                      <button
                        className="btn btn-outline-dark btn-square"
                        onClick={() => clickHandler(data)}
                      >
                        Buy
                      </button>
                    </div>

                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href="">{data.ProductName}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{data.Price}ETB</h5>
                    </div>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
