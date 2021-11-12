import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="navbar-container ">
                <div className="img">
                    <img src="images/menu-icon.svg" alt="Menu icon" />
                </div>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="logo">
                        <a href="/" target="_blank">
                            <img src="images/logo.png" alt="entre logo" />
                        </a>
                    </div>
                    <ul className="navUl navbar-nav mb-2 mb-lg-0">
                        <li className="navList nav-item" id="nav-item-1">
                            <a className="navLink nav-link text-dark " href="/">{props.title}</a>
                        </li>
                        <li className="navList nav-item" id="nav-item-2">
                            <a className="navLink nav-link text-dark " href="/">{props.language}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="searchBar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="searchIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className=" bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </form>
                    <ul className="navUl-1 navbar-nav">
                        <li className="navList nav-item" id="nav-item-1">
                            <a className="navLink nav-link text-dark " href="/">Wishlist ❤️</a>
                        </li>
                    </ul>
                    <div className="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                            className="bi bi-cart3" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                    <div className="login-singup-tab">{props.loginAndSingup}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}
