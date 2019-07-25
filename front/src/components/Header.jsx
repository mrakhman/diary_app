import React from 'react';
import { Link } from "react-router-dom";
// src={"../../public/diary.png"}

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <nav className="menu">
                    <Link className="" to="/">
                        <img src={process.env.PUBLIC_URL + "diary.png"} alt="logo" width="40"/>
                    </Link>
                    <ul className="no-decoration">
                        <li className="no-decoration"><Link className="nav-menu" to="/new_post">New post</Link></li>
                        <li className="no-decoration"><Link className="nav-menu" to="/all_posts">All posts</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;
