import React from 'react'
import style from './Header.module.scss'
import {Link, NavLink} from 'react-router-dom'
import {GiBallerinaShoes} from 'react-icons/gi';
import {BsCart4} from 'react-icons/bs'
const Header = () => {
  return (
    <header>
        <div className={style.header}>
            <div className={style.logo}><GiBallerinaShoes className={style.icon}/>Elegant <span className={style.col}>Collections</span></div>
        
                <nav>
                    <ul>
                    <li> 
                    <Link to="/admin/home"><button className="--btn --btn-primary">Admin</button></Link>
                    </li>
                    <li>
                    <Link to= "/">Home</Link></li>
                    <li>
                    <Link to= "/contact">Contact Us</Link></li>
                    </ul>
                    <div className={style['header-right']}>
                      <span className={style.links}>
                      <NavLink to="/login">Login</NavLink>
                      <NavLink to="/">Hi, user</NavLink>
                      <NavLink to="/">My Orders</NavLink>
                      <NavLink to="/">Signout</NavLink>
                      <span >
                    <Link to="/cart">Cart<BsCart4 size={20} /></Link>
                  </span>
                      </span>
                    </div>
                </nav>

                </div>
    </header>
  )
}

export default Header