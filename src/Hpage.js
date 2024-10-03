import React from "react"
import './Hpage.css'
import { Link } from 'react-router-dom';
import {auth} from "./firebase";
// import Login from "./Login";
import { useStateValue } from './StateProvider';
import HomePage from "./HomePage";


function Hpage(){
    // const [{user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        // if (user) {
        // auth.signOut();
        // }
    }

return(
    <div className="header">
        
        <div className="Header--Nav NavH">
            <nav className="navbar1">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/investment-plans">Investment Plans</Link></li>
                <li><Link to="/budgeting-tips">Budgeting Tips</Link></li>
                <li><Link to="/education-savings">Education Savings</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            </nav>
        </div>
        <div className="header--logo1">
        <div className="logo-nva">
            <Link to="/">
            <center><img className="header--logo"  alt="logo" src="./image/vision.png"/></center>
            </Link>
        </div>
        </div>    
        <div className="header--nav1">
                <Link to = '/SignIn'>
                <div onClick={handleAuthentication} className="header--option">
                    {/* <span className="header--optionLineOne">Hello {!user ? user.email : 'Guest'}</span>
                    <span className="header--SignIn">{user ? 'Sign Out' : 'Sign In'}</span> */}
                    <span className="Nav-home1">SignIn</span>
                </div>
                </Link>
        </div>
    </div>
)
}

export default Hpage;