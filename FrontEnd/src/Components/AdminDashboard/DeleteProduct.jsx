import React, { useState } from 'react'

function DeleteProduct() {


    const [productForm, setProductForm] = useState({
        IDS: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductForm(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:3000/api/product/deleteProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(productForm)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.message) {
    //                 alert('Product Deleted Succesfully. ✅');
    //             }
    //             else if (data.error) {
    //                 alert(`Something went Wrong, Try again later.`);
    //             }
    //         }

    //         )
    //         .catch((err) => alert('Something went wrong!!!'))

    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const idsArray = productForm.IDS.split(',').map(id => parseInt(id.trim())).filter(Boolean);

        fetch('http://localhost:3000/api/product/deleteProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ IDS: idsArray })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert('Product Deleted Succesfully. ✅');
                }
                else if (data.error) {
                    alert(`Something went Wrong, Try again later.`);
                }
            })
            .catch((err) => alert('Something went wrong!!!'));
    };


    return (
        <div>
            <div className='container my-2'>
                <div className='text-center '>
                    <h2>Delete Products From Inventory</h2>
                    <hr />
                </div>
                <div className='input-container text-center'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Product ID' name='IDS' value={productForm.IDS} onChange={handleChange} required /><br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default DeleteProduct
