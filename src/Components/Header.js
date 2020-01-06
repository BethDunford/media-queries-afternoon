import React from 'react';
import './Header.css';
import hamburger from '../menu-icon.png';

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
            <header>
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
                                src={hamburger}
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
                <h2>Welcome To Our Studio</h2>
                <h1>IT'S NICE TO MEET YOU</h1>
                <button>TELL ME MORE</button>
            </header>
        )
    }
}