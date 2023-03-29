import React from 'react'
import './ContactMe.css'

const ContactMe = () => {

    const copyEmail = () => {
        navigator.clipboard.writeText('danielirizacs@gmail.com')
          .then(() => {
            console.log('text copied')
            const successText = document.createElement('span')
            successText.textContent = '✔email copied'
            successText.style.color = 'green'
            const button = document.getElementById('email-button')
            button.parentNode.insertBefore(successText, button.nextSibling)
            setTimeout(() => {
              successText.remove()
            }, 2000)
          })
          .catch((error) => {
            console.log('error copying text: ', error)
          })
      }
  return (
    <div id = 'contact-container'>
      <div id = 'contact-content'>
        <h4>contact</h4>
        <button id = 'email-button'class="cybr-btn" onClick={copyEmail}>
            email<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">email</span>
            <span aria-hidden class="cybr-btn__tag">R25</span>
        </button>
        <span id="email-copied"></span>
        <a href = 'https://www.linkedin.com/in/danieliriza/' target = "_blank" rel = "noreferrer">
            <button id = 'linkedin-button'class="cybr-btn">
            linkedin<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">linkedin</span>
            <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </a>
      </div>
    </div>
  ) 
}

export default ContactMe