 import React from 'react';
 import {Link , BrowserRouter} from 'react-router-dom';
 import { connect } from 'react-redux';
 import { createStructuredSelector, createStructureSelector } from 'reselect';

 import { auth } from '../../firebase/firebase.utils';
 import CartIcon from '../cart-icon/cart-icon.component';
 import CartDropdown from '../cart-dropdown/cart-dropdown.component';
 import { selectCartHidden } from '../../redux/cart/cart.selectors';
 import { selectCurrentUser } from '../../redux/user/user.selector';

 import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

 import './header.styles.scss'; 
 
 const Header = ({currentUser, hidden}) => (
    <div className='header'>
   
        <BrowserRouter><Link className='logo-container' to='/'>
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
                <div className='option' onClick={() => auth.signOut()}> 
                    SIGN OUT
                </div>
                ):(
                <BrowserRouter><Link className='option' to='/signin'>
                    SIGN IN
                </Link></BrowserRouter>
            )}
            <CartIcon />  
        </div> {
        hidden ? null : <CartDropdown/> }
    </div>  
 );

 const mapStateToProps = createStructuredSelector ({ 
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
 });
  
 export default connect(mapStateToProps)(Header);   
