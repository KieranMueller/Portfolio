import React from 'react'

export default function Resume() {
    return (
        <div id='resume-container-1'>
            <div className='download-div'>Download My Resume</div>
            <img src='resume.png' alt='resume' id='resume-img' />
            <div className='resume-btn-div'>
                <a href='Resume.docx' download={'Kieran Mueller Resume'}>
                    <button class='btn btn-primary'>Download Word.docx</button>
                </a>
                <a
                    href='Resume-pdf-cook.pdf'
                    download={'Kieran Mueller Resume'}>
                    <button class='btn btn-primary'>Download PDF</button>
                </a>
            </div>
        </div>
    )
}
