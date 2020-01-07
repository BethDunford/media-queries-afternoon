import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuStatus: 'drop-down-menu'
        }
    }

    handleClick = () => {
        if (this.state.menuStatus === 'drop-down-menu-open') {
            this.setState({ menuStatus: 'drop-down-menu-closed' })
        } else {
            this.setState({ menuStatus: 'drop-down-menu-open' })
        }
    }

    render() {
        return (
            <header className="header">
                <nav>
                    <h3>Start Bootstrap</h3>
                    <ul id='site-nav'>
                        <li className='menu-text'>SERVICES</li>
                        <li className='menu-text'>PORTFOLIO</li>
                        <li className='menu-text'>ABOUT</li>
                        <li className='menu-text'>TEAM</li>
                        <li className='menu-text'>CONTACT</li>
                        <li>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <button
                                onClick={this.handleClick}
                                >MENU <i class="fa fa-bars"></i></button>
                        </li>
                        <ul className={this.state.menuStatus}>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </ul>
                </nav>
            </header>
        )
    }
}