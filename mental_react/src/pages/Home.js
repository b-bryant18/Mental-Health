import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Calculator from "../components/Calculator";
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Container>
                <Calculator />
            </Container>
            <Footer />
        </div>
    );
}

export default Home;