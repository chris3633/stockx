import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import { useAuth } from '../contexts/AuthContext'
import News from '../components/News'
import { Container } from "react-bootstrap";
import "../pages/HomePage.css"


function Home() {
    const { currentUser } = useAuth()

    return (
        <Container
            className="newscontainer"
            style={{ minHeight: "200vh" }}
        >
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
                <News />
            </div>
        </Container>

    )
}

export default Home