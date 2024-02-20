import React from 'react';

function Header(props) {
    return (
        
        <div className='wrapper'>
            <header className='header'>
                <div className='container'>
                <figure className='logo'>
                    <p className='header__desc'>Fmove</p>
                </figure>
                <nav className='nav'>
                    <ul className='nav__block'>
                        <li className='nav__list'>Catalog</li>
                        <li className='nav__list'>Contact Us</li>
                        <li className='nav__list'>SIGN IN</li>
                        <li className='nav__list'>SIGN UP</li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;