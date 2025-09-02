import React, {useEffect, useState} from 'react'
import './styles/Header.css';
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
      <div className="mainCont">
        <header>
            <nav className="navBar">
                <div>
                    <a href="#">Home</a>
                    <a href="#">Kanto</a>
                    <a href="#">Johto</a>
                    <a href="#">Hoen</a>
                    <a href="#">Sinnoh</a>
                    <a href="#">Unova</a>
                </div>
                <div>
                    <a href="#" className="profileIcon"><CgProfile /></a>
                </div>
            </nav>
        </header>
      </div>
    );
}

export default Header;