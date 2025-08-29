import React, {useEffect, useState} from 'react'
import './styles/Header.css';

function Header() {
    return (
      <div class="mainCont">
        <header>
            <nav class="navBar">
                <div>
                    <a href="#">Home</a>
                    <a href="#">Kanto</a>
                    <a href="#">Johto</a>
                    <a href="#">Hoen</a>
                    <a href="#">Sinnoh</a>
                    <a href="#">Unova</a>
                </div>
                <div>
                    <a href="#" class="profileIcon">Profile</a>
                </div>
            </nav>
        </header>
      </div>
    );
}

export default Header;