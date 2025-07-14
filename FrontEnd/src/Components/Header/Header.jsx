import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import { useCart } from '../CartContext/CartContext';
import img1 from '../../img/icons/admin (2).png'
import img2 from '../../img/icons/profile (1).png'


function Header() {
    const [catagoties, setCatagoties] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const [signInButton, setSignInButton] = useState(false)
    const { careItem, formData, setFormData, clearAllLocalData, userName } = useCart()

    const clickHandler = () => {
        setCatagoties(!catagoties);
    }
    const NavBarToggler = () => {
        setNavBar(!navBar);
    }
    const myAccountButton = () => {
        setSignInButton(!signInButton)
    }



    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <div onClick={clickHandler}>
                            <Link className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" to="#navbar-vertical" >
                                <h6 className="text-dark m-0 py-3 "><i className="fa fa-bars mr-2"></i>Categories</h6>
                                <i className="fa fa-angle-down text-dark"></i>
                            </Link>
                        </div>

                        {catagoties ?
                            <nav className="d-block position-absolute navbar navbar-vertical navbar-light align-items-start p- bg-light col-lg-12" style={{ zIndex: "2", width: "92%" }}>
                                <div className="navbar-nav">
                                    <Link to="Shop/#mensFashion" className="nav-item nav-link">Men's Fashion</Link>
                                    <Link to="Shop" className="nav-item nav-link">Women's Fashion</Link>
                                    <Link to="Shop" className="nav-item nav-link">Kid's Fashion</Link>
                                    <Link to="Shop" className="nav-item nav-link">Shose</Link>
                                    <Link to="Shop" className="nav-item nav-link">Electronics</Link>
                                </div>
                            </nav> : <></>
                        }
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to="" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">ASTU</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">E-COMMERCE</span>
                            </Link>
                            <button type="button" className="navbar-toggler" onClick={NavBarToggler}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {
                                navBar ?
                                    <div className="py-3 navbar-collapse d-md-none">
                                        <Link to="/" className="nav-item nav-link ">Home</Link>
                                        <Link to="Shop" className="nav-item nav-link">Shop</Link>
                                        <Link to="myCart" className="nav-item nav-link">My Cart</Link>
                                        <Link to="contact" className="nav-item nav-link">Contact</Link>
                                        <Link to="AboutUs" className="nav-item nav-link">About us</Link>
                                        <Link to="LogInPage" className="nav-item nav-link">Admin</Link>
                                        {
                                            userName.length === 0 ? <Link to="signIn" className="nav-item nav-link">My Account</Link>
                                                : <div className='row header-icons py-3 my-auto'>
                                                    <div className='col-3'><img src={img2} alt="" /></div>
                                                    <div className='col-9'><h6>{userName[0].name}</h6></div>
                                                    <div className='w-100 p-0'><hr /></div>
                                                    <div className=' mx-auto'>
                                                        <h6 onClick={clearAllLocalData}>Log out</h6>
                                                    </div>
                                                </div>
                                        }
                                    </div> : <></>
                            }
                            <div className="navbar-collapse d-none">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link ">Home</Link>
                                    <Link to="Shop" className="nav-item nav-link">Shop</Link>
                                    <Link to="myCart" className="nav-item nav-link">My Cart</Link>
                                    <Link to="contact" className="nav-item nav-link">Contact</Link>
                                    <Link to="AboutUs" className="nav-item nav-link">About us</Link>
                                </div>


                                <div className="col-lg-3 d-none d-lg-block">
                                    <div className='row'>
                                        <div className='col-6 my-auto text-center'>
                                            <Link to='/LogInPage'>
                                                <img src={img1} alt="" />
                                                <h6>Admin</h6>
                                            </Link>
                                        </div>
                                        <div onClick={myAccountButton} className='text-center py-3 col-6'>
                                            <h4 style={{ color: "white", fontSize: "medium" }}>My Account</h4>
                                        </div>
                                    </div>


                                    {signInButton ?
                                        <div className="d-block position-absolute navbar navbar-vertical navbar-light align-items-start p- bg-light col-lg-12" style={{ zIndex: "2", width: "92%" }}>
                                            <div>
                                                <div className="px-0 py-1" style={{ color: "black" }}>
                                                    {
                                                        userName.length === 0 ?
                                                            <div>
                                                                <Link to="signIn" className="px-0 py-1 " style={{ color: "black" }}>Sign up / Log In</Link>
                                                            </div>
                                                            : <div className='row header-icons'>
                                                                <div className='col-3'><img src={img2} alt="" /></div>
                                                                <div className='col-9'><p>{userName[0].name}</p></div>
                                                                <div className='w-100 p-0'><hr /></div>
                                                                <div className=' mx-auto'>
                                                                    <p onClick={clearAllLocalData}>Log out</p>
                                                                </div>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header



