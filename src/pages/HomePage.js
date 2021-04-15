import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import { useAuth } from '../contexts/AuthContext'
import News from '../components/News'
import { Container } from "react-bootstrap";
import "../pages/HomePage.css"
import { Header } from "semantic-ui-react";


function Home() {
    const { currentUser } = useAuth()

    return (

        (!currentUser) ? (
            <Container
                className="newscontainer"
                style={{ minHeight: "100vh", marginTop: 70 }}
            >
                <div>

                    <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
                    <News />
                </div>
            </Container>
        ) : (

            <Container
                className="newscontainer"
                style={{ minHeight: "100vh" }}
            >
                <div>

                    <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
                    <News />
                </div>
            </Container>
        )
    )
}

export default Home