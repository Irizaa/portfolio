import { useState, React } from 'react'
import './ProjectSection.css'
// https://i.imgur.com/O5f97aN.gif soundstats 1
// https://i.imgur.com/oAZIgQz.gif soundstats 2
// https://i.imgur.com/ChlIT2T.gif soundstats 3
// https://i.imgur.com/J5Kz0ni.gif higherlower 1
// https://i.imgur.com/VvQtQuS.gif higherlower 2
const ProjectSection = () => {
  const projects = [
    {
      name: 'soundstats',
      githubLink: 'https://github.com/Irizaa/soundstats',
      description: `full-stack web-application which visualizes a user's historical spotify statistics`,
      metaname: 'soundstats'
    },
    {
      name: '🥊Price-Fight🥊',
      githubLink: 'https://github.com/Irizaa/higherlower',
      description: 'higher-lower style game - guess which item from popular online-s',
      metaname: 'higherlower'
    }
  ]
  const [currProject, setCurrProject] = useState(projects[0])

  const handleProjectChange = (project) => {
    setCurrProject(project)
    let opposite
    if(project.metaname === 'higherlower') { opposite = 'soundstats'}
    if(project.metaname === 'soundstats') { opposite = 'higherlower'}
    const elements = document.querySelectorAll(`.${project.metaname}-gif`);
      elements.forEach(element => {
      element.style.filter = 'grayscale(0%)';
    })
    const elements2 = document.querySelectorAll(`.${opposite}-gif`);
      elements2.forEach(element => {
      element.style.filter = 'grayscale(100%)';
    })
  }

  console.log(currProject)
  return (
    <div id = 'project-container'>
        <div id = 'project-gifs'>
            <img onClick={() => handleProjectChange(projects[0])} alt = 'soundstats-1' className = 'small-video soundstats-gif' src = "https://i.imgur.com/O5f97aN.gif"/>
            <img onClick={() => handleProjectChange(projects[0])} alt = 'soundstats-2' className = 'small-video soundstats-gif' src = "https://i.imgur.com/oAZIgQz.gif"/>
            <img onClick={() => handleProjectChange(projects[0])} alt = 'soundstats-3' className = 'small-video soundstats-gif' src = "https://i.imgur.com/ChlIT2T.gif"/>
            <img onClick={() => handleProjectChange(projects[1])} alt = 'higherlower-1' className = 'small-video higherlower-gif' src = "https://i.imgur.com/J5Kz0ni.gif"/>
            <img onClick={() => handleProjectChange(projects[1])} alt = 'higherlower-2' className = 'small-video higherlower-gif' src = "https://i.imgur.com/VvQtQuS.gif"/>
        </div>
        <div id = 'project-information'>
          <h3>{currProject.name}</h3>
          <p>{currProject.description}</p>
        </div>
    </div>
  )
}

export default ProjectSection