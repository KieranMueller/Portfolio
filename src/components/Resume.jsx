import React from 'react'

export default function Resume() {
    return (
        <div id='resume-container-1'>
            <img src='resume.png' alt='resume' id='resume-img' />
            <a href='Resume.docx' download={'Kieran Mueller Resume'}>
                <button class='btn btn-primary'>Download</button>
            </a>
        </div>
    )
}
