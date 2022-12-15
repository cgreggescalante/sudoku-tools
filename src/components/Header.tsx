import {Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/about">About</NavLink>
        </Nav>
    </Navbar>
)

export default Header;
