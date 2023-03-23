import './App.css'

import {React, useState, useEffect} from 'react'
import TitleSection from './Components/TitleSection'
import Loading from './Components/Loading'
import ProjectSection from './Components/ProjectSection'
import AboutMe from './Components/AboutMe'

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      })
    })
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))
  })
  return (
    <div>
      <section className = 'hidden'>
        <TitleSection/>
        <AboutMe/>
        <ProjectSection/>
      </section>
        {!loadingComplete && (
            <Loading onLoadingComplete={() => setLoadingComplete(true)}></Loading>
        )}
    </div>
  )
}

export default App