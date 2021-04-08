import React from 'react'
import { Header } from "semantic-ui-react";

function Contactpage() {
    return (
        <div>
        <Header as="h2" style={{ textAlign: "center", margin: 100 }}>
            Feel free to contact us!
        </Header>
        <Header as="h5" style={{ textAlign: "center", margin: 100 }}>
            Christian Morini: christian.morini@studenti.unipr.it
            <br/><br/>
            Samuele Dallospedale: samuele.dallospedale@studenti.unipr.it
        </Header>
        </div>
        
    )
}

export default Contactpage
