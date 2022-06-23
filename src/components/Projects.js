import React from 'react'
import data from '../data.json'

const Project = ({info}) => {
    return (
        <div style={{paddingTop: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #eee"}}>
            <a href={info.link} target="blank"><h6 className='example-header'>{info.title}</h6></a>
            <ul>{info.description.map(para => <li>{para}</li>)}</ul>
        </div>
    )
}

const Projects = () => {
    React.useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Programming Projects</h6>
            {data.projects.map(p => <Project info={p}/>)}
        </div>
    )
}

export default Projects