import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext'
import { Link, useNavigate } from 'react-router';

function LogIn() {

  const navigate = useNavigate();

  const { formData, setFormData, setUser, clearAllLocalData } = useCart();
  const [userAuthntication, setUserAuthntication] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAuthntication(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/user/UserAuthentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userAuthntication)

    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(`You are not found. Sign Up to continue.`);
        }
        else if(data.userId){
          setUser(data)
          navigate('/')
        }
      }

      )
      .catch((err) => alert('Something went wrong!!!'))

  };

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row px-xl-5 ">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Personal Profile</span></h5>
            <div className="bg-light p-30 mb-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="email" placeholder="John@gmail.com" name='email' value={userAuthntication.email} onChange={handleChange}
                      required="required" data-validation-required-message="Please enter your first name" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Password</label>
                    <input className="form-control" type="text" placeholder="12345" name='password' value={userAuthntication.password} onChange={handleChange}
                      required="required" data-validation-required-message="Please enter your last name" />
                  </div>
                </div>
                <div className='text-center my-5 row'>
                  <div className='col-6'><button className='btn btn-primary' type='submit'>Agree and Submit</button></div>
                  <div className='col-6'>
                    <p>I am new for the website.</p>
                    <Link to="/SignIn"><button className='btn btn-primary' type='submit'>Sign Up</button></Link>
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

export default LogIn
