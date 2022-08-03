import React from 'react';

const Navbar= () => {

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>LOGO</h1>
                </NavLink>
                <Bars>

                </Bars>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        contact
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        sign up
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