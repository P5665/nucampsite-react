import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';

// Im keeping Container in because BS goes Container -> Row -> Col
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar dark color='primary' sticky='top' expand='md' container='sm'>
			<NavbarBrand className='d-flex align-items-center'>
				<img src={NucampLogo} alt='nucamp logo' />
				<h1>Nucamp</h1>
			</NavbarBrand>
			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className='ms-auto' navbar>
					<NavItem>
						<NavLink className='nav-link text-white' to='/'>
							<i className='fa fa-home fa-lg' /> Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link text-white' to='/directory'>
							<i className='fa fa-list fa-lg' /> Directory
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link text-white' to='/about'>
							<i className='fa fa-info fa-lg' /> About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link text-white' to='/contact'>
							<i className='fa fa-address-card fa-lg' /> Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
