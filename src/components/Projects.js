import React from 'react'

const Projects = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Programming Projects</h6>
        </div>
    )
}

export default Projects