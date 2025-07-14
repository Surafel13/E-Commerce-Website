import React, { useState } from 'react'

function UpdateOrderStatus() {

    const [orderForm, setorderForm] = useState({
        orderId: [],
        newStatus: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setorderForm(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/order/updateOrderStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderForm)

        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert('Order Status Updated Succesfully. ✅');
                }
                else if (data.error) {
                    alert(`Something went Wrong, Try again later.`);
                }
            }

            )
            .catch((err) => alert('Something went wrong!!!'))

    };



    return (
        <div>
            <div className='container my-2'>
                <div className='text-center '>
                    <h2>Update Order Status</h2>
                    <hr />
                </div>
                <div className='input-container text-center'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Order ID' name='orderId' value={orderForm.orderId} onChange={handleChange} required /><br />
                        <input type="text" placeholder='New Order Status' name='newStatus' value={orderForm.newStatus} onChange={handleChange} required /><br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateOrderStatus
