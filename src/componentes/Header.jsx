import React from "react"
import "./style.css"
import Carrinho from "../assets/img-la-pizza/carrinho.png"

function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li id="home"><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About us</a></li>
                        <li><img id="nav-carrinho" src={Carrinho} alt="" /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header