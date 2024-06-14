import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.scss';

const data = [
    {
        label: "HOME",
        to: '/'
    },
    {
        label: "ABOUT",
        to: '/about'
    },
    {
        label: "SKILLS",
        to: '/skills'
    },
    {
        label: "RESUME",
        to: '/resume'
    },
    {
        label: "PORTFOLIO",
        to: '/portfolio'
    },
    {
        label: "CONTACT",
        to: '/contact'
    }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false); // Close the toggle menu when a link is clicked
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <div className="navbar_container_logo">
                        <img src="/logo.jpg" alt="logo" />
                    </div>
                    <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                        {data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link
                                    className="navbar_container_menu_item_links"
                                    to={item.to}
                                    onClick={handleLinkClick} // Close toggle menu on link click
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav_icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
