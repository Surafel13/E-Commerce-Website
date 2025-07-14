import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function LogInPage() {

  const [UserForm, setUserForm] = useState({
    Email: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/Admin/loginAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(UserForm)

    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert(`Something went Wrong, Try again later.`);
        }
        else {
          navigate('/AdminDashBoard')
        }
      }

      )
      .catch((err) => alert('Something went wrong!!!'))

  };



  return (
    <div>
      <div className='container my-2'>
        <div className='text-center '>
          <h2>Log in as Admin</h2>
          <hr />
          <p>This page is only allowed for the Admin.</p>
        </div>
        <div className='input-container text-center'>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' name='Email' value={UserForm.Email} onChange={handleChange} required /><br />
            <input type="password" placeholder='Password' name='Password' value={UserForm.Password} onChange={handleChange} required /><br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
