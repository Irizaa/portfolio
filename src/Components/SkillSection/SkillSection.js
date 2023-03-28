import React from 'react'
import './SkillSection.css'
import PythonLogo from '../../Assets/pythonlogo.png'
import NodeLogo from '../../Assets/nodelogo.png'
import ReactLogo from '../../Assets/reactlogo.png'
import SQLLogo from '../../Assets/sqllogo.png'
import JavaLogo from '../../Assets/javalogo.png'
import HTMLLogo from '../../Assets/htmllogo.png'
import CSSLogo from '../../Assets/csslogo.png'
import JSLogo from '../../Assets/jslogo.png'

const SkillSection = () => {
  
  const skills = [
    {name: 'Java', image: JavaLogo},
    {name: 'JavaScript', image: JSLogo},
    {name: 'Python', image: PythonLogo},
    {name: 'SQL', image: SQLLogo},
    {name: 'Node.js', image: NodeLogo},
    {name: 'React.js', image: ReactLogo},
    {name: 'HTML', image: HTMLLogo},
    {name: 'CSS', image: CSSLogo}
  ]
  return (
    <div id = 'skills-container'>
      <div id = 'skill-icons'>
        <h2>Languages & Frameworks</h2>
        {skills.map((skill) => (
          <div id = 'skill-container'>
            <img className = 'skill-icon' src={skill.image}/>
            <div className='skill-name'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection