import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
    state = {

    };
    render () {
        return (
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">My diary</Link>
                    <ul className="navbar-nav mr-auto">
                        <li><Link className="nav-link" to="/new_post">New post</Link></li>
                        <li><Link className="nav-link" to="/all_posts">All posts</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;
