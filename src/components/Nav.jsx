import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class='navbar navbar-dark bg-dark fixed-top' data-bs-theme='dark'>
            <div class='container-fluid'>
                <Link class='navbar-brand' to={'/'}>
                    Kieran Mueller
                </Link>
                <div>
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

                {/* <button
                    class='navbar-toggler'
                    type='button'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasDarkNavbar'
                    aria-controls='offcanvasDarkNavbar'
                    aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button> */}
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
                                    class='nav-link active'
                                    aria-current='page'
                                    to={'/projects'}>
                                    Projects
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link' to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                            <li class='nav-item dropdown'>
                                <Link
                                    class='nav-link dropdown-toggle'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                    Something
                                </Link>
                                <ul class='dropdown-menu dropdown-menu-dark'>
                                    <li>
                                        <Link class='dropdown-item' to={'/'}>
                                            Something else
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class='dropdown-item' to={'/'}>
                                            Another Thing
                                        </Link>
                                    </li>
                                    <li>
                                        <hr class='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link class='dropdown-item' to={'/'}>
                                            And Yet Another Thing
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
