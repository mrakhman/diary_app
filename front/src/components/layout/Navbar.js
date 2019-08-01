import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '../../diary.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends React.Component {
    render () {
        return (
            <div className='header'>
                <nav className="menu">
                    <Link className="" to="/">
                        <img src={Logo} alt="logo" width="40"/>
                    </Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </nav>
            </div>
        );
    }
}
export default Navbar;
