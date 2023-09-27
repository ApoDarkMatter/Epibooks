import { nanoid } from 'nanoid'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const MyFooter = ({links}) => {
  return (
        <footer className="bg-light mt-5">
            <Container>
                <Row className="justify-content-center py-4">
                    <Col md={4} className="text-center">
                    <h5>EpiBooks</h5>
                    <p>WOW Books!.</p>
                    </Col>
                    <Col md={4} className="text-center">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        {links.map(link => (
                            <a key={nanoid()} href={link.href}><li>{link.name}</li></a>
                        ))}
                    </ul>
                    </Col>
                    <Col md={4} className="text-center">
                    <h5>Contact Us</h5>
                    <p>Email: <a href="mailto:epibooks@epibooks.com">epibooks@epibooks.com</a></p>
                    <p>Phone: <a href="tel:+123 456 7890">+123 456 7890</a></p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center py-3">
                    &copy; 2023 All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}

export default MyFooter