import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '../../diary.png';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <nav className="menu">
                    <Link className="" to="/">
                        <img src={Logo} alt="logo" width="40"/>
                    </Link>
                    <ul className="no-decoration">
                        <li className="no-decoration"><NavLink className="nav-menu" to="/new_post">New post</NavLink></li>
                        <li className="no-decoration"><NavLink className="nav-menu" to="/all_posts">All posts</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;
