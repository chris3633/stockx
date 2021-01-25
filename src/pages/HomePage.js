import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import {useAuth} from '../contexts/AuthContext'
import { Autorenew } from '@material-ui/icons'
import News from '../components/News'
import { Container } from '@material-ui/core'


function Home() {
    const { currentUser } = useAuth()

    return (
        <div>
            <div className="box">
            <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
            <News/>
            </div>
        </div>
    )
}

export default Home