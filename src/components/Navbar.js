import logo from '../images/logo.svg';

import { pageLinks, socialLinks } from './data';
import { useState } from 'react'

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggleClasses = toggle ? "show-links nav-links" : "nav-links";
    const navHeaderClasses = toggle ? "nav-header fix-logo" : "nav-header";

    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className={navHeaderClasses}>
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle" onClick={() => setToggle(!toggle)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={toggleClasses} id="nav-links">
            {
                pageLinks.map((link) => {
                    return(
                        <li key={link.id}>
                            <a href={link.href} className="nav-link" > {link.text} </a>
                        </li>
                    )
                })
            }
          </ul>

          <ul className="nav-icons">
            {
                socialLinks.map((socialLink) => {
                    const {id, href, icon} = socialLink;
                    return(
                        <li key={id}>
                            <a href={href} rel="noreferrer" target="_blank" className="nav-icon"
                                ><i className={icon}></i
                            ></a>
                        </li>
                    )
                })
            }            
          </ul>
        </div>
    </nav>
    )
}