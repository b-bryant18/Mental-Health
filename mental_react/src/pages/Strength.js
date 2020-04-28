import React from 'react';
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from '../components/Row';

function Strength() {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <h1>I am the strength page</h1>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}

export default Strength;