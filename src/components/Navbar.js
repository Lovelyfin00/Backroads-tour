import logo from '../images/logo.svg';

import { pageLinks, socialLinks } from './data';

export const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
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