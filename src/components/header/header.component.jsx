 import React from "react";
 import {Link , BrowserRouter} from "react-router-dom";

 import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

 import './header.styles.scss';
 
 const Header = () => (
    <div className='header'>
   
        <BrowserRouter><Link className='logo-container' to="/">
            <Logo className='' />
        </Link></BrowserRouter>
        
        <div className = 'options'>
            <BrowserRouter><Link className='option' to='/shop'>
                SHOP
            </Link></BrowserRouter>

            <BrowserRouter><Link className='option' to='/shop'>
                CONTACT
            </Link></BrowserRouter>
            
        </div>
    
    </div>  

 )

 export default Header;
