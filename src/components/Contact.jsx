import React from 'react'
// import { useState } from 'react'

export default function Contact() {
    // const [subject, setSubject] = useState('')
    // const [message, setMessage] = useState('')

    return (
        <div id='contact-container-1'>
            <div id='contact-container'>
                <form>
                    <p>Send Me an Email! kieran98mueller@gmail.com</p>
                    <hr />
                    <div class='mb-3'>
                        <label for='exampleInputEmail1' class='form-label'>
                            Subject
                        </label>
                        <input
                            placeholder='email feature currently not working'
                            type='text'
                            class='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                        />
                    </div>
                    <div class='mb-3'>
                        <label for='exampleInputPassword1' class='form-label'>
                            Message
                        </label>
                        <textarea
                            type='text'
                            class='form-control'
                            id='exampleInputPassword1'
                        />
                    </div>

                    <button type='submit' class='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
