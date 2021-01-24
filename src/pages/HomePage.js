import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import {useAuth} from '../contexts/AuthContext'


function Home() {
    const { currentUser } = useAuth()

    return (
        <div className="container">
            <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
            <MediaCard>

            </MediaCard>
        </div>
    )
}

export default Home