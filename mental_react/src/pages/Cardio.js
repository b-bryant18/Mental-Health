import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from '../components/Row';

function Cardio() {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <div>
                        <h1>Cardio page</h1>
                    </div>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}
export default Cardio;