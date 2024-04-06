import React from 'react'

export default function Resume() {
    return (
        <div id='resume-container-1'>
            <div className='download-div'>Download My Resume (Old - Last updated Aug '23)</div>
            <img src='resume.png' alt='resume' id='resume-img' />
            <div className='resume-btn-div'>
                <a
                    href='resume-personal.pdf'
                    download={'Kieran Mueller Resume'}>
                    <button class='btn btn-primary'>Download PDF</button>
                </a>
            </div>
        </div>
    )
}
