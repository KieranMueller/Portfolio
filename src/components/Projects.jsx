import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    let [cap, setCap] = React.useState('OFF')

    const toggleCaption = () => {
        if (cap === 'OFF') {
            setCap('ON')
            document.querySelector('#cap1').style.opacity = 0
            document.querySelector('#cap2').style.opacity = 0
            document.querySelector('#cap3').style.opacity = 0
            document.querySelector('#cap4').style.opacity = 0
            document.querySelector('#cap5').style.opacity = 0
            document.querySelector('#cap6').style.opacity = 0
            document.querySelector('#cap7').style.opacity = 0
        } else if (cap === 'ON') {
            document.querySelector('#cap1').style.opacity = 0.9
            document.querySelector('#cap2').style.opacity = 0.9
            document.querySelector('#cap3').style.opacity = 0.9
            document.querySelector('#cap4').style.opacity = 0.9
            document.querySelector('#cap5').style.opacity = 0.9
            document.querySelector('#cap6').style.opacity = 0.9
            document.querySelector('#cap7').style.opacity = 0.9
            setCap('OFF')
        }
    }

    return (
        <div id='project-container'>
            <div id='carouselExampleIndicators' class='carousel slide'>
                <div class='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='0'
                        class='active'
                        aria-current='true'
                        aria-label='Slide 1'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='1'
                        aria-label='Slide 2'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='2'
                        aria-label='Slide 3'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='3'
                        aria-label='Slide 4'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='4'
                        aria-label='Slide 5'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='5'
                        aria-label='Slide 6'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='6'
                        aria-label='Slide 7'></button>
                </div>
                <div class='carousel-inner'>
                    <div class='carousel-item active'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://www.youtube.com/watch?v=B3wsDxoG_VE'
                                }>
                                View Demo on YouTube
                            </Link>
                        </div>
                        <img
                            src='app3.jpg'
                            class='d-block w-100'
                            alt='coding project 1'
                        />
                        <div class='carousel-caption d-md-block' id='cap1'>
                            <h5>Jasper University (Personal Project)</h5>
                            <p>
                                Humerous Cat University (single page app)
                                created with Java Spring Boot and PostgreSQL for
                                the backend, React for the frontend. Currently
                                working on hosting the site with Amazon Web
                                Services using an S3 bucket, an EC2 instance,
                                and an RDS Database. Site includes full CRUD
                                functionality with the ability to add, create,
                                and delete students and teachers, as well as add
                                and sort courses, assign teachers to courses,
                                and assign students to courses (with all changes
                                reflected in the database)
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://www.youtube.com/watch?v=EYw6pDSKELU&t=141s'
                                }>
                                View Demo on YouTube
                            </Link>
                        </div>
                        <img
                            src='app1.jpg'
                            class='d-block w-100'
                            alt='coding project 2'
                        />
                        <div class='carousel-caption d-md-block' id='cap2'>
                            <h5>Dump N' Change (Personal Project)</h5>
                            <p>
                                Single page app with full CRUD functionality.
                                Created with Java Spring Boot and MySQL for the
                                backend, React for the frontend. Users have the
                                ability to add, update, and delete players.
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://www.youtube.com/watch?v=gzXhI4Xq9bg&t=143s'
                                }>
                                View Demo on YouTube
                            </Link>
                        </div>
                        <img
                            src='app2.jpg'
                            class='d-block w-100'
                            alt='coding project 3'
                        />
                        <div class='carousel-caption d-md-block' id='cap3'>
                            <h5>My First CRUD App (Personal Project)</h5>
                            <p>
                                Created a simple CRUD application with a Java
                                Spring Boot REST API connected to MySQL in the
                                backend, and React for the frontend.
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://github.com/KieranMueller/Twitter-API'
                                }>
                                View Repository on GitHub
                            </Link>
                        </div>
                        <img
                            src='app4.png'
                            class='d-block w-100'
                            alt='coding project 4'
                        />
                        <div class='carousel-caption  d-md-block' id='cap4'>
                            <h5>Twitter API (Cook Systems FastTrack'D)</h5>
                            <p>
                                Implemented a functional Twitter (clone) API
                                using Java Spring Boot and PostgreSQL. As a team
                                of 3, we created 30 endpoints; including
                                functionality to GET, POST, DELETE tweets and
                                users - follow, like, and repost other users and
                                tweets - as well as GET replies, hashtags,
                                mentions.
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://github.com/KieranMueller/Quiz-API'
                                }>
                                View Repository on GitHub
                            </Link>
                        </div>
                        <img
                            src='app6.png'
                            class='d-block w-100'
                            alt='coding project 5'
                        />
                        <div class='carousel-caption  d-md-block' id='cap5'>
                            <h5>Quiz API (Cook Systems FastTrack'D)</h5>
                            <p>
                                Solo project created with Java Spring Boot and
                                PostgreSQL, implementing endpoints for a quiz
                                API, to include quizzes, questions and answers.
                                Includes full CRUD functionality to GET, POST,
                                PATCH, and DELETE quizzes, questions, and
                                answers.
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={'https://github.com/KieranMueller/Tester'}>
                                View Repository on GitHub
                            </Link>
                        </div>
                        <img
                            src='app7.png'
                            class='d-block w-100'
                            alt='coding project 6'
                        />
                        <div class='carousel-caption  d-md-block' id='cap6'>
                            <h5>Quizler (Cook Systems FastTrack'D)</h5>
                            <p>
                                Javascript assignment implementing three utility
                                methods for a command line quiz application.
                                Good practice using ES6 features, to include
                                arrow functions, template literals, default
                                function parameters, and the spread operator.
                            </p>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='carousel-link'>
                            <Link
                                class='btn btn-primary'
                                target='blank'
                                to={
                                    'https://inspiring-piroshki-36ce4e.netlify.app/'
                                }>
                                Visit Site!
                            </Link>
                        </div>
                        <img
                            src='app8.png'
                            class='d-block w-100'
                            alt='coding project 6'
                        />
                        <div class='carousel-caption  d-md-block' id='cap7'>
                            <h5>My First Website</h5>
                            <p>
                                Created this website shortly after learning HTML
                                and CSS. I had yet to learn much Javascript but
                                was so excited to make something! The site
                                includes links to all of my beginner projects
                                and sites.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    class='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='prev'>
                    <span
                        class='carousel-control-prev-icon'
                        aria-hidden='true'></span>
                    <span class='visually-hidden'>Previous</span>
                </button>
                <button
                    class='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='next'>
                    <span
                        class='carousel-control-next-icon'
                        aria-hidden='true'></span>
                    <span class='visually-hidden'>Next</span>
                </button>
            </div>
            <button
                onClick={toggleCaption}
                className='btn btn-primary'
                id='toggle-caption-btn'>
                Toggle Caption: {cap}
            </button>
        </div>
    )
}
