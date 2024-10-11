import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    let [avatar, setAvatar] = useState('')
    let [bio, setBio] = useState('')

    React.useEffect(() => {
        fetchGit()
    })

    const fetchGit = async () => {
        await fetch(`https://api.github.com/users/kieranMueller`)
            .then(r => r.json())
            .then(d => {
                setAvatar(d.avatar_url)
                setBio(d.bio)
            })
    }

    const showDesc = () => {
        document.getElementById('skills').style.display = 'none'
        document.getElementById('skills-1').style.display = 'none'
        document.getElementById('desc').style.display = 'block'
    }

    const showMain = () => {
        document.getElementById('skills').style.display = 'block'
        document.getElementById('skills-1').style.display = 'block'
        document.getElementById('desc').style.display = 'none'
    }

    return (
        <div id='home-container-1'>
            <div id='home-container'>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                    <div className='card bg-dark' id='desc-card'>
                        <div className='card-body' id='desc-text-div'>
                            <h5 className='card-text'>Hey There!</h5>
                            <p className='card-text'>
                                My name is Kieran Mueller and I'm a 25 year old
                                junior full-stack developer from Minneapolis,
                                MN. I graduated from the University of Minnesota
                                in 2021 with a B.S. in Business Marketing
                                Education, but found my passion for coding after
                                College. I graduated from the Cook Systems,
                                Full-Stack Application Development (FastTrack'D)
                                Program in August 2023. I have been working in a
                                team as a junior full-stack with FedEx Ground
                                since September 2023, focusing on Java Spring
                                Boot backends and Angular frontends. I enjoy
                                problem solving and learning more every day.
                                Visit my YouTube below to see some projects in
                                action, or some guitar videos... click the
                                button below to view a few of my recent
                                projects!
                            </p>
                            <Link to={'/projects'} className='btn btn-primary'>
                                Projects
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className='card bg-dark prof-card'
                    id='prof-card'
                    style={{ width: '18rem' }}>
                    <img
                        id='prof-pic'
                        src={avatar !== undefined ? avatar : 'me1.png'}
                        className='card-img-top'
                        alt='me'
                    />
                    <div className='card-body'>
                        <h3 className='card-text' id='skills'>
                            Skills:{' '}
                        </h3>
                        <p
                            className='card-text'
                            style={{ display: 'none' }}
                            id='desc'>
                            Born in Robbinsdale, MN, I grew up playing hockey
                            and baseball. I attended Totino-Grace High School in
                            Fridley, MN. I played club hockey as a Minnesota
                            Gopher and completed Army ROTC. Upon graduating, I
                            commissioned as a 2LT, Infantry Officer in the MN
                            National Guard where I continue to serve as a
                            Headquarters Company Executive Officer. My free time
                            consists of coding, whether I am trying to
                            familiarize myself with a new language or framework,
                            or polishing a personal project. I began my coding
                            journey December 2022 with HTML, CSS, and
                            Javascript, then dove into React, Java, Spring,
                            Angular, and Databases
                            <button onClick={showMain} className='btn btn-primary mt-2'>
                                Return
                            </button>
                        </p>
                        <p className='card-text' id='skills-1'>
                            {bio}
                            <button onClick={showDesc} className='btn btn-primary mt-2'>
                                Personal Bio
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div id='icon-container'>
                <Link
                    target='blank'
                    to={
                        'https://www.youtube.com/channel/UC3gry2C-8YyNM_MbaEkZZbQ'
                    }>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 576 512'>
                        <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                    </svg>
                </Link>
                <Link target='blank' to={'https://github.com/KieranMueller'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 496 512'>
                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                    </svg>
                </Link>
                <Link
                    to={'https://www.linkedin.com/in/kieran-mueller-6535791a3/'}
                    target='blank'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'>
                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                    </svg>
                </Link>
                <Link
                    to={'https://www.instagram.com/kieran.mueller/'}
                    target='blank'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'>
                        <path d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
