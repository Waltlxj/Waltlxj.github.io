import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>About me</h6>
            <p> I am a current college junior majoring in Psychology and CS at Carleton College, MN. </p>
            <p>I have many hobbies.</p>
            <div className='icon-list'>
                <a className='icon' href="https://www.linkedin.com/in/xiongju-walt-li-a12922173/" target="blank"><i className="fa-brands fa-linkedin fa-xl"></i></a>
			    <a className='icon' href="https://github.com/Waltlxj" target="blank"><i className='fa-brands fa-github fa-xl'></i></a>
			    <a className='icon' href="https://www.instagram.com/waltlxjpix" target="blank"><i className='fa-brands fa-instagram fa-xl'></i></a>
			    <a className='icon' href="mailto:liw4@carleton.edu"><i className='fa-solid fa-envelope fa-xl'></i></a>
            </div>
        </div>
    )
}

export default Intro