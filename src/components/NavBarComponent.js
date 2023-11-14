import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
function NavBarComponent(){


    return(
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/welcome"}>Ingegneria Informatica</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/homepage"}>Homepage</Nav.Link>
                        <Nav.Link as={Link} to={"/lessonTimetable"}>Orario lezioni</Nav.Link>
                        <Nav.Link as={Link} to={"/students"}>Studenti</Nav.Link>
                        <Nav.Link as={Link} to={"/login"}>Login Docente</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )

}
export default NavBarComponent;