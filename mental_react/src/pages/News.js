import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Header from "../components/Header"
import Footer from "../components/Footer"

function GoodNews() {
    return(
        <div>
            <Container>
                <Header />
                <Row>
                    <header> Welcome to the Good News page</header>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

export default GoodNews;