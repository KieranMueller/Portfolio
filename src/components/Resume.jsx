import React from 'react'

export default function Resume() {
    return (
        <div id='resume-container-1'>
            <div className='download-div'>
                Download My Resume (Last updated Sep '24)
            </div>
            <img src='resume.png' alt='resume' id='resume-img' />
            <div className='resume-btn-div'>
                <a
                    href='(SEP 2024) resume-kieran-mueller.pdf'
                    download={'Kieran Mueller Resume'}>
                    <button className='btn btn-primary'>Download PDF</button>
                </a>
            </div>
        </div>
    )
}
