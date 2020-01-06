import React from 'react';
import './Header.css';
// import hamburger from '../menu-icon.png';

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
                        <li className='menu-text'>Services</li>
                        <li className='menu-text'>Portfolio</li>
                        <li className='menu-text'>About</li>
                        <li className='menu-text'>Team</li>
                        <li className='menu-text'>Contact</li>
                        <li>
                            <img
                                onClick={this.handleClick}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Menu%2C_Web_Fundamentals_%28White%29.svg/1280px-Menu%2C_Web_Fundamentals_%28White%29.svg.png"
                                alt="Menu icon"
                            />
                        </li>
                        <ul className={this.state.menuStatus}>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>About</li>
                            <li>Team</li>
                            <li>Contact</li>
                        </ul>
                    </ul>
                </nav>
            </header>
        )
    }
}