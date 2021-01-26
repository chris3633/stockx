import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import { useAuth } from '../contexts/AuthContext'
import News from '../components/News'


function Home() {
    const { currentUser } = useAuth()

    return (
        <div>
            <div >
                <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
                <News />
            </div>
        </div>
    )
}

export default Home