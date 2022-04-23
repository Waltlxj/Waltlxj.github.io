import React from 'react'
import './Intro.css'
import { SwitchTransition, CSSTransition } from "react-transition-group";


const hobbies = ['coding', 'nature', 'people-watching', 'sci-fi', 'photography & digital art', 'classical singing']
//const colors = ['#4f8104', '#f3b700', '#80a141', '#9d8e00']

const Intro = () => {
    const [index, setIndex] = React.useState(0)
    const changeHobby = () => {
        setIndex(index+1)
        //console.log(index)
    }
    setTimeout(changeHobby, 1600)

    React.useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      }, []);

    return (
        <div className='docs-section'>
            <h6 className='docs-header'>About me</h6>
            <p> I am a current college junior majoring in Psychology and CS at Carleton College, MN. </p>
            <p> I like 
            <SwitchTransition mode='out-in'>
            <CSSTransition
                key={index}
                addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
                }}
                classNames="fade-inline"
            >
                <span> {hobbies[index%hobbies.length]}.</span>
            </CSSTransition>
            </SwitchTransition>
            </p>
                
            <div className='icon-list'>
                <a className='icon' href="https://www.linkedin.com/in/xiongju-walt-li-a12922173/" target="blank"><i className="fa-brands fa-linkedin fa-xl"></i></a>
			    <a className='icon' href="https://github.com/Waltlxj" target="blank"><i className='fa-brands fa-github fa-xl'></i></a>
			    <a className='icon' href="https://www.instagram.com/waltlxjpix" target="blank"><i className='fa-brands fa-instagram fa-xl'></i></a>
                <a className='icon' href="https://www.flickr.com/photos/192637096@N03/" target="blank"><i className='fa-brands fa-flickr fa-xl'></i></a>
			    <a className='icon' href="mailto:liw4@carleton.edu"><i className='fa-solid fa-envelope fa-xl'></i></a>
            </div>
        </div>
    )
}

export default Intro