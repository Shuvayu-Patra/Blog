import React from 'react'
import image from '../images/logo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={image} alt='logo' width={50}/>
    </div>
  )
}

export default Logo
