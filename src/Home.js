import { Button, Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Header />
            <Banner/>
        </>
    );
}
function Header() {
    return (
        <>
            <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
                <Container>
                    <Navbar.Brand>ProWebsite </Navbar.Brand>
                    <img src="images/Logo.jpg" width='50' height='50' alt="logo" className="rounded-circle" />
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#home">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

function Banner() {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img src="images/image1.jpg" className="w-100" alt="image1" style={{height:'500px',objectFit:'cover'}}   />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Demostrating First Slide</p>
                    <Button variant="dark">Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="images/image2.jpg" className="w-100" style={{height:'500px',objectFit:'cover'}}  alt="image2"  />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Demostrating Second Slide</p>
                    <Button variant="warning">Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="images/image3.jpg" className="w-100"  alt="image3" style={{height:'500px',objectFit:'cover'}}  />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>Demostrating Third Slide</p>
                    <Button variant="danger">Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}