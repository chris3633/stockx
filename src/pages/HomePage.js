import React from 'react'
import "../pages/HomePage.css"
import MediaCard from '../components/MediaCard'
import {useAuth} from '../contexts/AuthContext'
import { Autorenew } from '@material-ui/icons'


function Home() {
    const { currentUser } = useAuth()

    return (
        <div className="container" >
            <div className="box">
            <h1 className="title"> "Buy and sell stocks as you never did before!"</h1>
            <MediaCard>

            </MediaCard>
            </div>
        </div>
    )
}

export default Home