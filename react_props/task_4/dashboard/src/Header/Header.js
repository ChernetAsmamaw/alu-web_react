import React from 'react';
import logo from '../assets/hbnb-logo.jpg'
import './Header.css';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="hbnb-logo" alt="hbnb-logo" />
            <h1>School dashboard</h1>
        </header>
    );
}
