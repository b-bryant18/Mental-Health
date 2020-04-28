import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Container>
                <h2>Welcome to the home page</h2>
            </Container>
           <Footer />
        </div>
    );
}

export default Home;