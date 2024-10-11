import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const handleClick = () => {
        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    return (
        <nav className='navbar navbar-dark bg-dark fixed-top' data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to={'/'}>
                    <i id='home-icon' className='fa-solid fa-house'></i>
                    Kieran Mueller
                </Link>
                <div id='nav-options'>
                    <Link className='navbar-brand' to={'/projects'}>
                        Projects
                    </Link>
                    <Link className='navbar-brand' to={'/resume'}>
                        Resume
                    </Link>
                    <Link className='navbar-brand' to={'/contact'}>
                        Contact
                    </Link>
                </div>

                <button
                    className='navbar-toggler'
                    id='nav-burger'
                    type='button'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasDarkNavbar'
                    aria-controls='offcanvasDarkNavbar'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='offcanvas offcanvas-end text-bg-dark'
                    tabIndex='-1'
                    id='offcanvasDarkNavbar'
                    aria-labelledby='offcanvasDarkNavbarLabel'>
                    <div className='offcanvas-header'>
                        <button
                            type='button'
                            className='btn-close btn-close-white'
                            data-bs-dismiss='offcanvas'
                            aria-label='Close'></button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                            <li className='nav-item'>
                                <Link
                                    onClick={handleClick}
                                    className='nav-link'
                                    aria-current='page'
                                    to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    onClick={handleClick}
                                    className='nav-link'
                                    aria-current='page'
                                    to={'/projects'}>
                                    Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    onClick={handleClick}
                                    className='nav-link'
                                    aria-current='page'
                                    to={'/resume'}>
                                    Resume
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    onClick={handleClick}
                                    className='nav-link' to={'/contact'}>
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
