import React from 'react'
import './home.css'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <div className='home-content'>
                <Outlet />

            </div>


            <div className='home-routes'> 
            <NavLink  className={({isActive}) =>  isActive && 'selected'} to='/home/product' style={{marginRight:'10px'}}>product</NavLink>
            <NavLink  className={({isActive}) =>  isActive && 'selected'} to='/home/order' style={{marginRight:'10px'}}>order</NavLink>
            </div>

        </div>
    </div>
  )
}

export default Home