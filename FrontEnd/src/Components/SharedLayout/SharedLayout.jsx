import React from 'react'
import Header from '../Header/Header'
import Fotter from '../Footer/Fotter'
import { Outlet } from 'react-router'


function SharedLayout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Fotter />

    </div>
  )
}

export default SharedLayout
