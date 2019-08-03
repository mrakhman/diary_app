import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '../../diary.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from "react-redux";

class Navbar extends React.Component {
    render () {
        const {auth, profile} = this.props;
        const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
        return (
            <div className='header'>
                <nav className="menu">
                    <Link className="" to="/">
                        <img src={Logo} alt="logo" width="40"/>
                    </Link>
                    { links }
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Navbar);
