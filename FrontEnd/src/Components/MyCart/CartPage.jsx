import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext';

function CartPage() {   

    const { cartItem, removeCartItem, quantities, setQuantities, formData, setFormData, user } = useCart();
    const [orders, setOrders] = useState({})
    const removeButtonHandler = (products) => {
        removeCartItem(products);
    }

    console.log(user)

    useEffect(() => {
        const initialQuantities = {};
        cartItem.forEach(item => {
            initialQuantities[item.ProductId] = 1;
        });
        setQuantities(initialQuantities);
    }, [cartItem]);

    const increaseQuantity = (productId) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: prev[productId] + 1
        }));
    };

    const decreaseQuantity = (productId) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max(1, prev[productId] - 1)
        }));
    };

    const clickHandler = () => {


        if(formData.fname != '' && formData.lname != ''){
            fetch('http://localhost:3000/api/order/CreateOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "userId" : user[0].userId , "Product": quantities, "status" : "Pennding"})
            })
            .then(res => res.json())
            .then(msg => alert(msg))
            .catch(err => alert("Unable to send the order!"))
        }else{
            alert("Sign in to order products. Click My Accoount , Go to Sign in page and submit your data.")
        }


    }


    return (
        <div >
            {
                cartItem.length !== 0 ?
                    <div className="container-fluid">
                        <div className="row px-xl-5">
                            <div className="col-lg-8 table-responsive mb-5">
                                <table className="table table-light table-borderless table-hover text-center mb-0">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>

                                        {
                                            cartItem.map((product, i) => {
                                                const quantity = quantities[product.ProductId] || 1;
                                                return <>
                                                    <tr key={i}>
                                                        <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: "50px" }} />{product.ProductName}</td>
                                                        <td className="align-middle">${product.Price}</td>
                                                        <td className="align-middle">
                                                            <div className="input-group mx-auto" style={{ width: "100px" }}>
                                                                <div className="input-group-btn">
                                                                    <button
                                                                        className="btn btn-sm btn-primary btn-minus"
                                                                        onClick={() => decreaseQuantity(product.ProductId)}
                                                                    >
                                                                        -
                                                                    </button>

                                                                </div>
                                                                <button className="form-control form-control-sm bg-secondary border-0 text-center" disabled>
                                                                    {quantity}
                                                                </button>
                                                                <div className="input-group-btn">
                                                                    <button
                                                                        className="btn btn-sm btn-primary btn-plus"
                                                                        onClick={() => increaseQuantity(product.ProductId)}
                                                                    >
                                                                        +
                                                                    </button>

                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">${product.Price * quantity}</td>
                                                        <td className="align-middle"><button className=" btn-sm btn-danger"
                                                            onClick={() => {
                                                                removeButtonHandler(product)
                                                            }}>x</button></td>
                                                    </tr >

                                                </>
                                            })
                                        }
                                    </thead>
                                    <tbody className="align-middle">
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-4">
                                <form className="mb-30" action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary">Apply Coupon</button>
                                        </div>
                                    </div>
                                </form>
                                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                                <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom pb-2">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h6>Subtotal</h6>
                                            <h6>$150</h6>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-medium">Shipping</h6>
                                            <h6 className="font-weight-medium">$10</h6>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="d-flex justify-content-between mt-2">
                                            <h5>Total</h5>
                                            <h5>$160</h5>
                                        </div>
                                        <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={clickHandler}>Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h1 className='text-center mt-5 py-5 '> Your cart is Empty! <br /> <p className='mb-5'>😊</p
                    ></h1>
            }
        </div >
    )
}

export default CartPage
