import { Container, Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

// Im keeping Container in because BS goes Container -> Row -> Col
const Header = () => {
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <Container>
                <NavbarBrand>
                    <img src={NucampLogo} alt="nucamp logo" />
                </NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Header;
