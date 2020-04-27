import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                    </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                        </DropdownItem>
                                <DropdownItem>
                                    Option 2
                        </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                        </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;

//   //Navbar Properties
//   Navbar.propTypes = {
//       light: PropTypes.bool,
//       dark: PropTypes.bool,
//       fixed: PropTypes.string,
//       color: PropTypes.string,
//       role: PropTypes.string,
//       expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//       tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//       //Pass in custom element to use
//   }

//   //NavbarBrand Properties
//   NavbarBrand.propTypes = {
//       tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//       //Pass in custom element to use
//   }

//   //NavbarText Properties 
//   NavbarText.propTypes = {
//       tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//       //Pass in custom element to use
//   }

//   //NavbarToggler Properties
//   NavbarToggler.propTypes = {
//       type: PropTypes.string,
//       tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//       //Pass in custom element to use
//   }









// import { Link } from 'react-router-dom';
// import './style.css';

// // Change classname of navbar or add one from bootstrap
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div>
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <Link
//                             to="/"
//                             className={
//                                 window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link-active" : "nav-link"}
//                            >Home</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link 
//                     to="/workout"
//                     className={
//                         window.location.pathname === "workout" ? "nav-link-active" : "nav-link"}
//                         >
//                             Workout
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;