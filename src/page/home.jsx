import React from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <div className='home-content'>
                <Outlet />

            </div>


            <div className='home-routes'>
            <Link  to='/home/product' style={{marginRight:'10px'}}>product</Link>
            <Link  to='/home/order' style={{marginRight:'10px'}}>order</Link>
            </div>

        </div>
    </div>
  )
}

export default Home