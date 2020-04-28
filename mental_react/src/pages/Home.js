import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Row from '../components/Row';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <h2>Welcome to the home page</h2>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;