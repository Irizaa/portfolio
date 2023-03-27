import { React } from 'react'
import './TitleSection.css'
import GithubLogo from '../../Assets/github-4.png'
import LinkedinLogo from '../../Assets/linkedin-3.png'

const TitleSection = () => {
  return (
    <div id = 'title-container'>
      <div id = 'logo-container'>
        <a href = 'http://www.github.com/Irizaa' target = "_blank" rel = "noreferrer">
          <img alt = 'github' id = 'github-logo' className = 'logo' src = {GithubLogo}/>
        </a>

        <a href = 'https://www.linkedin.com/in/danieliriza/' target = "_blank" rel = "noreferrer">
          <img alt = 'linkedin' className = 'logo' src = {LinkedinLogo}/>
        </a>
      </div>
    <h1>Daniel Iriza</h1>
    </div>
  )
}

export default TitleSection