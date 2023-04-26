import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer bg-dark bottom text-center">
            <Container>

                <p className="text-white mb-0" style={{ textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
                    About us
                </p>

                <p className="text-white mb-0">
                    Welcome to Artifex, where you can buy and sell digital artworks.
                </p>

                <p className="text-white mb-0" style={{ textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
                    Contact us
                </p>

                <p className="text-white mb-0">
                    artifex@gmail.com
                </p>

                <Row>
                    <Col className='text-center py-3'>
                    
                    <Link to={'/TermsAndConditions'}>
                        <p className="text-white mb-0">
                        <i class="fa-solid fa-book fa-xl"></i> Terms and Conditions
                        </p>
                    </Link>
                    </Col>
                </Row>

                <p className="text-white mb-0">
                    &copy; Artifex {new Date().getFullYear()}
                </p>

            </Container>
        </footer>
    );
}

export default Footer;