import React from 'react';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import Widget from '../Components/Widget';
import TransectionCart from '../Components/TransectionChart';
import BuyerChart from '../Components/BuyerChart';
import Products from '../Components/Products';


const Home = () => {
  return (
    <>
    <div  className='Home flex  '>
            <SideBar/>
        <div className="homeContainer bg-slate-100   flex-1">
          <div className="container">
              <Navbar/>
              <div className='flex gap-4 flex-wrap w-full mt-6'>
              <Widget type='earning'/>
              <Widget type='order'/>
              <Widget type='balance'/>
              <Widget type='total sales' />

              </div>
              <div className='mt-4 flex max-md:flex-wrap gap-4 w-full'>
                  <TransectionCart/>
                  <BuyerChart/>
              </div>
              <div className='mt-4'>
                  <Products/>
              </div>
          </div>
                
        </div>
        
      
    </div>
    </>
  )
}

export default Home
