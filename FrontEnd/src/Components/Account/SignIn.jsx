import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext'
import { Link, useNavigate } from 'react-router';


function SignIn() {

    const navigate = useNavigate();
    const { formData, setFormData, setUser } = useCart();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/user/userSignIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(`Something went Wrong!. Try again later or remember if you sign up to this website!!!`);
                }
                else {
                    alert('You have signed in successfully. 😁');
                    setUser(data)
                    navigate('/')
                }
            }

            )
            .catch((err) => alert('Something went wrong!!!'))

    };


    return (
        <div>
            <div className="container-fluid ">
                <div className="row px-xl-5 ">
                    <div className="col-lg-8">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Personal Profile</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="John" name='fname' value={formData.fname} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your first name" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text" placeholder="Doe" name='lname' value={formData.lname} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your last name" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="example@email.com" name='email' value={formData.email} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your e-mail" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Password</label>
                                        <input className="form-control" type="text" placeholder="123456789" name='password' value={formData.password} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your password" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="+123 456 789" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your Mobile number" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address</label>
                                        <input className="form-control" type="text" placeholder="123 Street" name='address' value={formData.address} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your Address" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Country</label>
                                        <select className="custom-select" name='country'>
                                            <option selected>Ethiopia</option>
                                            <option>United States</option>
                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                            <option>United Kingdom</option>
                                            <option>Kenya</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input className="form-control" type="text" placeholder="New York" name='city' value={formData.city} onChange={handleChange}
                                            required="required" data-validation-required-message="Please enter your City" />
                                    </div>
                                </div>

                                <div className='text-center my-5 row'>
                                    <div className='col-6'><button className='btn btn-primary' type='submit'>Agree and Submit</button></div>
                                    <div className='col-6'>
                                        <p>I have already sign up</p>
                                        <Link to="/LogIn"><button className='btn btn-primary' type='submit'>Log In</button></Link>
                                    </div>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
