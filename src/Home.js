import { Button, Card, Carousel, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <MainContent />
            <FooterComp />
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
                    <img src="images/image1.jpg" className="d-block w-100" alt="image1" style={{ height: '500px', objectFit: 'cover' }} />
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                        <p>Demostrating First Slide</p>
                        <Button variant="dark">Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/image2.jpg" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="image2" />
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                        <p>Demostrating Second Slide</p>
                        <Button variant="warning">Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/image3.jpg" className="d-block w-100" alt="image3" style={{ height: '500px', objectFit: 'cover' }} />
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
function MainContent() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col> <Cards /></Col>
                </Row>
                <Row className="mt-5">
                    <Col> <FormCont /></Col>
                    <Col><Map /> </Col>
                </Row>
            </Container>
        </>
    );
}
function Cards() {
    return (
        <>
            <Row>
                <Col>
                    <Card style={{ width: '25rem' }} className="h-100"  >
                        <Card.Img src='https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhZmZ8ZW58MHx8MHx8fDA%3D' style={{ width: '100%', height: '300px' }} />
                        <Card.Body>
                            <Card.Title>Consulting</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque unde sunt ullam quis quae?
                            </Card.Text>
                            <Button>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }} className="h-100" >
                        <Card.Img src='https://images.unsplash.com/photo-1568658176307-bfbd2873abda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RhZmZ8ZW58MHx8MHx8fDA%3D' style={{ width: '100%', height: '300px' }} />
                        <Card.Body>
                            <Card.Title>Strategy</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque unde quod assumenda, doloremque, quibusdam, accusamus tempore iusto illo sint eos. Exercitationem aspernatur dolores vitae impedit commodi temporibus doloremque sunt ullam quis quae?
                            </Card.Text>
                            <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                <Col>
                    <Card style={{ width: '25rem' }} className="h-100" >
                        <Card.Img src='https://images.unsplash.com/photo-1576267423429-569309b31e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhZmZ8ZW58MHx8MHx8fDA%3D' style={{ height: '300px', width: '100%' }} />
                        <Card.Body>
                            <Card.Title>Technology</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque unde quod assumenda, doloremque, quibusdam, accusamus tempore iusto illo sint eos. Exercitationem aspernatur dolores vitae impedit commodi temporibus doloremque sunt ullam quis quae?
                            </Card.Text>
                            <Button variant='danger'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    );
}


function FormCont() {
    return (
        <>
            <h3>Contact Form:</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name"></Form.Control>
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Your Number"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Your Message"></Form.Control>
                </Form.Group>

            </Form>
            <Button variant="dark" className="mt-3">Submit</Button>
        </>
    );
}


function Map() {
    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14686.427948409413!2d72.5583797!3d23.0381982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1728456633093!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
}

function FooterComp() {
    return (
        <>
            <footer>
                <Row className="m-auto  text-bg-dark text-white mt-5 p-3 text-center">
                    <Col>&copy;2024 ProWebsite | All Rights Reserved</Col>
                </Row>
            </footer>
        </>
    );
}