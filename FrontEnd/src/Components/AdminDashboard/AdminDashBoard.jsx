import React from 'react'
import { Link } from 'react-router'

function AdminDashBoard() {
  return (
    <div>
      <div className='text-cent'>
        <div className='text-center my-2 w-50 mx-auto'>
            <h3>Admin Dashboard </h3><hr />
        </div>
        <div className='container'>
            <p><b>What you want to do?</b></p>
        </div>
        <div className='AdminLink text-center'>
            <div className='py-4 adminLinks my-3 container'><Link to='/AddProduct'>Add Product</Link> </div>
            <div className='py-4 adminLinks my-3 container'><Link to='/DeleteProduct'>Delete Product</Link> </div>
            <div className='py-4 adminLinks my-3 container'><Link to='/UpdateOrderStatus'>Update Order Status</Link> </div>
            <div className='py-4 adminLinks my-3 container'><Link to='/BrowseAllOrders'>Browse All Orders</Link> </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard
