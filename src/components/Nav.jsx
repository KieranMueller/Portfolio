import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class='navbar navbar-dark bg-dark fixed-top' data-bs-theme='dark'>
            <div class='container-fluid'>
                <Link class='navbar-brand' to={'/'}>
                    <i id='home-icon' class='fa-solid fa-house'></i>
                    Kieran Mueller
                </Link>
                <div id='nav-options'>
                    <Link class='navbar-brand' to={'/projects'}>
                        Projects
                    </Link>
                    <Link class='navbar-brand' to={'/resume'}>
                        Resume
                    </Link>
                    <Link class='navbar-brand' to={'/contact'}>
                        Contact
                    </Link>
                </div>

                <button
                    class='navbar-toggler'
                    id='nav-burger'
                    type='button'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasDarkNavbar'
                    aria-controls='offcanvasDarkNavbar'
                    aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div
                    class='offcanvas offcanvas-end text-bg-dark'
                    tabindex='-1'
                    id='offcanvasDarkNavbar'
                    aria-labelledby='offcanvasDarkNavbarLabel'>
                    <div class='offcanvas-header'>
                        <button
                            type='button'
                            class='btn-close btn-close-white'
                            data-bs-dismiss='offcanvas'
                            aria-label='Close'></button>
                    </div>
                    <div class='offcanvas-body'>
                        <ul class='navbar-nav justify-content-end flex-grow-1 pe-3'>
                            <li class='nav-item'>
                                <Link
                                    class='nav-link'
                                    aria-current='page'
                                    to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link
                                    class='nav-link'
                                    aria-current='page'
                                    to={'/projects'}>
                                    Projects
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link
                                    class='nav-link'
                                    aria-current='page'
                                    to={'/resume'}>
                                    Resume
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link' to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
