import React from 'react';
import Header from './Header';
import Nav from './Nav';
import './NavHeader.css';

const NavHeader = () => {
    return (
        <section className='nav-header'>
            <Nav/>
            <Header/>
        </section>
    );
};

export default NavHeader;