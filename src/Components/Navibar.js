
import React,{useState} from 'react';
import {Nav, Navbar,Button, Container, Modal, Form} from 'react-bootstrap';
import {Link  } from 'react-router-dom';
import styled from 'styled-components';

const Styles= styled.div`
a, .navbar-brand, .navbar-nav, nav-link {
    color:#adb1b8;
    &:hover {
        color: white
    }
}
`
export default function NaviBar()
{
     const [show,setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const [show1,setShow1] = useState(false);
     const handleClose1 = () => setShow1(false);
     const handleShow1 = () => setShow1(true);
    return(
<>
<Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variante="dark">
        <Container>
        <Navbar.Brand>Pivchik</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            </Nav>
            <Nav>
                <Button variante="primary " className="mr-2" onClick={handleShow}>Log in</Button>
                <Button variante="primary" onClick={handleShow1} >Reg</Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
</Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                            </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal.Header>
            
        </Modal>
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>Registr</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>   
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                            </Form.Group>
                        <Form.Group controlId="fromBasicPasswordr">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="repeat password" placeholder="repeat password"/>
                        </Form.Group> 
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal.Header>
            
        </Modal>
</>
    )
}