import React from 'react';
import styles from '../../styles/ContactUs.module.css';
import { LuMapPin } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>CONTACT US</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h1 style={{color:'#0033a0'}}>Akeshya</h1>
                        <p>Designers, developers & marketeers capable of delivering solutions according to your needs.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <p><LuMapPin color='#0033a0' fontSize={20}/> 26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
                        <p><RiMailSendLine color='#0033a0'/> info@akeshya.com</p>
                        <p><MdOutlineLocalPhone color='#0033a0'/> +91 94942 40922</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form className={styles.centeredForm}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Your Name"
                                    aria-label="Your Name"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email"
                                    aria-label="Your Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Subject"
                                    aria-label="Subject"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                placeholder="Message"
                                className="mb-3"
                            />
                            <div className={styles.sendButtonContainer}>
                                <Button style={{ borderRadius: '60px', backgroundColor: '#14279B', width: 110, height: 40 }}>
                                    <span style={{ color: 'white' }}>Send Message</span>
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;
