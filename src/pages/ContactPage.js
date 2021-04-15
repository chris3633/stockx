import React from 'react'
import { Header } from "semantic-ui-react";
import { Container } from "react-bootstrap"

function Contactpage() {
    return (
        <Container className="contactscontainer"
            style={{ minHeight: "100vh" }}>
            <div>
                <Header as="h2" style={{ textAlign: "center", margin: 100 }}>
                    Feel free to contact us!
        </Header>
                <Header as="h5" style={{ textAlign: "center", margin: 100 }}>
                    Christian Morini: christian.morini@studenti.unipr.it
            <br /><br />
            Samuele Dallospedale: samuele.dallospedale@studenti.unipr.it
        </Header>
            </div>
        </Container>
    )
}

export default Contactpage
