import React from 'react'
import {Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
    <HeroBanner />

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Any Sound Product You Need.</p>
    </div>

    <div className='products-container'>
      {['Product One', 'Product Two'].map(
        (product) => product
      )}
    </div>

    <FooterBanner />
    </>
  )
}

export default Home