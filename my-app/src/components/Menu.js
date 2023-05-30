import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import images from '../assets/Ser.jpg';

export const Menu = () => {
	return (
		<Navbar className="menu-navBar" bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">PostsPage</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className='menu-navDropdown' title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Posts</NavDropdown.Item>
              <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
							<Image src={images} rounded />
							<ListGroup.Item>Sergey</ListGroup.Item>
							<ListGroup.Item>SergeyChudinov1986@gmail.com</ListGroup.Item>
            </NavDropdown>
						<ListGroup horizontal className='menu_listGroup'>
						</ListGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}