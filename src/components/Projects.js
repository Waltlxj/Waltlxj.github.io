import React from 'react'

const Projects = () => {
    React.useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Programming Projects</h6>
            <div className='icon-list'>
			    <a className='icon' href="https://github.com/Waltlxj" target="blank"><i className='fa-brands fa-github fa-xl'></i></a>
            </div>
        </div>
    )
}

export default Projects