 import React from "react";
 import {Link , BrowserRouter} from 'react-router-dom';
 import { connect } from 'react-redux';

 import { auth } from '../../firebase/firebase.utils';
 import CartIcon from '../cart-icon/cart-icon.component';

 import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

 import './header.styles.scss';
 
 const Header = ({currentUser }) => (
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

            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut}> SIGN OUT </div>
                ):
                 
                (<BrowserRouter><Link className='option' to='/signin'>
                    SIGN IN
                </Link></BrowserRouter>
            )}
            <CartIcon />  
        </div>
    </div>  
 );

 const mapStateToProps =  state => ({ 
    currentUser: state.user.currentUser
 })

 export default connect(mapStateToProps)(Header);  
