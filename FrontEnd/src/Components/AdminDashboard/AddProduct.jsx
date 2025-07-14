import React, { useState } from 'react'

function AddProduct() {

    const [productForm, setProductForm] = useState({
        CategoryId: '',
        ProductName: '',
        Price: '',
        Description: '',
        ImgPath: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductForm(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/product/createProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productForm)

        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert('Product Added Succesfully. ✅');
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
                    <h2>Add Products To Inventory</h2>
                    <hr />
                </div>
                <div className='input-container text-center'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Catagory ID' name='CategoryId' value={productForm.CategoryId} onChange={handleChange} required /><br />
                        <input type="text" placeholder='Product Name' name='ProductName' value={productForm.ProductName} onChange={handleChange} required /><br />
                        <input type="text" placeholder='Price' name='Price' value={productForm.Price} onChange={handleChange} required /><br />
                        <input type="text" placeholder='Description' name='Description' value={productForm.Description} onChange={handleChange} required /><br />
                        <input type="file" placeholder='Image' name='ImgPath' value={productForm.ImgPath} onChange={handleChange} required /><br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
