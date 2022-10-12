import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 RJS Ecommerce All Rights Reserved</p>
      <p className='icons'>
        <a
          href='https://www.instagram.com/'
          target={'_blank'}
          rel={'noreferrer'}
        >
          <AiFillInstagram />
        </a>
        <a href='https://twitter.com/home' target={'_blank'} rel={'noreferrer'}>
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer
