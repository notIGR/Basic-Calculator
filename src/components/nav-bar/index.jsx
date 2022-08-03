import React from 'react';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './navBar';

const Navbar= () => {

    return (
        <>
            <Nav>
                <NavLink to="/">
                <h1>CalcThis!</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-up'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar