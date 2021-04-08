import React from 'react'
import { Header } from "semantic-ui-react";

function AboutPage() {
    return (
        <div>
        <Header as="h2" style={{ textAlign: "center", margin: 100 }}>
            Progetto di Tecnologie internet
        </Header>
        <Header as="h3" style={{ textAlign: "center", margin: 100 }}>
            Anno accademico 2020/2021 
            <br/><br/>
            Università degli Studi di Parma
        </Header>
        <Header as="h5" style={{ textAlign: "center", margin: 100 }}>
            Christian Morini - matr. 277199
            <br/><br/>
            Samuele Dallospedale - matr. 299948
        </Header>
        </div>
    )
}

export default AboutPage
