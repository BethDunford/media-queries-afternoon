import React from 'react';
import './Body.css';

export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <body className="hero-image">
                <link href="https://fonts.googleapis.com/css?family=Courgette|Kaushan+Script|Montserrat&display=swap" rel="stylesheet"></link>
                <h2>Welcome To Our Studio</h2>
                <h1>IT'S NICE TO MEET YOU</h1>
                <button id="more-button">TELL ME MORE</button>
            </body>
        )
    }
}