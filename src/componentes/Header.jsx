import React from "react"
import "./style.css"

function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li id="home"><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header