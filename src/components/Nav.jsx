import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>

function Nav() {
    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <Link to='/'>
                        <div className='logo'>
                            <img src="/images/icons/logo-01.png" alt="Logo" />
                        </div>
                    </Link>
                    <div className='nav-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/detail'>About</Link>
                    </div>
                    <div className="op">
                        <div className="search-container">
                            <input type="text" className="search-input" placeholder="Search..." />
                        </div>
                        <div className="iop">
                            <a href="/card"><i style={{ fontSize: '30px' }}><CiShoppingCart /></i></a>
                            <a href="/wishlist"><i style={{ fontSize: '30px' }}><GiSelfLove /></i></a>
                        </div>
                        <div className="login">
                            <a href="/login">Login/Sign up</a>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
        </>
    );
}

export default Nav;
