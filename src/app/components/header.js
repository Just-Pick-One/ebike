import React from 'react'
import logo from '../../assets/logo.png'
function Header () {
  return (
    <div
    className='Header'
    >
      <img
      className='HeaderImage'
      src={logo}
      />
      <h1 className='HeaderText' >All The eBikes</h1>
    </div>
  )
}

export default Header
