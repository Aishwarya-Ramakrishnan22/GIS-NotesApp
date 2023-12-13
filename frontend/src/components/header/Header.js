
import React from 'react'
import { Styles } from './HeaderStyles'
import TimeStamp from './TimeStamp'
import logo from '../../asset/logo.gif'
const Header = () => {
  
  return (
    <div style={Styles.container} >
        <div style={Styles.logo}><img src={logo}/></div>
        <div style={Styles.containerItems}><h1>App Title</h1></div>
        <div  style={Styles.timeStamp}><TimeStamp/> </div>
    </div>
  )
}

export default Header 