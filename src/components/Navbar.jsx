import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import logo from '../image/logo.svg'
import './Navbar/Navbar.css';
import { chakra, Image} from '@chakra-ui/react';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
   <>
    <nav className="navbar">
			<Link to="/" className="nav-logo">
				<Image height={'67.24px'} width={'288px'} top={'25px'} src={logo} />
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Our Services
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
          About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/store" className="nav-link" onClick={closeMenu}>
          ZL Store
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact Us
					</Link>
				</li>
        <li className="nav-item">
					<Link to="/more" className="nav-link" onClick={closeMenu}>
          More
					</Link>
				</li>
			</ul>
		</nav>
    <Outlet />
    </>
	);
};

export default Navbar;