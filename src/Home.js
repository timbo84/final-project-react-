import {Navbar, Nav, Container, Stack, Button, Form} from 'react-bootstrap'
import { Link, Outlet, useNavigate } from "react-router-dom"
import LoadingIndicator from './LoadingIndicator'

import Footer from './Footer'


function Home() {
    let navigate = useNavigate()
    const handleChange = (event) => {
        if (event.target.value === "") return;
          navigate('Search/' + event.target.value)
    }

    return (
        <>
            <Navbar  bg="primary" variant="danger">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="https://th.bing.com/th/id/OIP.B8rA6plo7Pqi8LFEPLYPwgHaE0?pid=ImgDet&rs=1"
                            width="40"
                            height="40"
                            className="d-inline-block align-center"
                            alt="2022"/>{' '}
                            FakeBros
                    </Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/new" className="nav-link">New Product</Link>
                        <Link to="/AboutUs" className="nav-link">About Us</Link>
                    </Nav>
                    <Navbar.Text>
                        <LoadingIndicator />
                    </Navbar.Text>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <Footer />
        </>

    )
}

export default Home