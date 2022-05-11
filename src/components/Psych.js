import React from 'react'
import poster from '../assets/COVID_PT_Poster_4.0.jpg'

const Poster = () => {
    const [expanded, setExpanded] = React.useState(false);
    const changeExpanded = () => {
        setExpanded(!expanded);
        // console.log("Changed expanded!");
    }
    return (
        <div onClick={changeExpanded} style={{width: '100%', height: expanded ? '520px' : '100px', marginBottom: '2rem', cursor: 'pointer', overflow: 'hidden', transition: '800ms'}}>
            <img src={poster} alt="Poster presentation of research" style={{width: '100%'}}/>
        </div>
    )
}

const Psychology = () => {
    React.useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Psychology</h6>
            <p>
            I like studying and thinking about psychology, particularly social and cultural psychology. 
            The study of psychology has shown me how to fairly and critically
            examine ideas and thoughts, and it has helped me find ways to 
            understand myself and to position myself in the world.
            </p>
            <br/>
        
            <h6 className='docs-header'>Research</h6>
            <h6 className='example-header'>Perspective-Taking and Sinophobia</h6>
            <p>This research project was conducted in the early months of the COVID-19 pandemic in America. 
                We were interested in applying a well-tested intervention called perspective-taking (Todd & Galinsky, 2014) to 
                address the rise in anti-Chinese and anti-Asian attitudes in the current environment.
                The study was presented in the 2021 Anual Convention of Society for Personality and Social Psychology.</p>
            <Poster />
            <br/>
            <h6 className='example-header'>Emotion Perception and Cultures</h6>
            <p> I had always heard about the intrinsicality and cross-cultural similarity 
                of emotion expressions (Ekman et al. 1972), but more recent research has been noticing the 
                cross-cultural differences of emotions and turning to <a href='https://plato.stanford.edu/entries/emotion/#BehaEcolViewPsycConsSociConsEmotCons' target='blank' style={{textDecoration: "underline dotted"}}>psychological constructionism</a> to understand emotions and emotion perception.
                Intrigued by the socialization and enculturation aspect of emotion and emotion perception, 
                I joined <a href='https://asclab.yale.edu/' target='blank' style={{textDecoration: "underline dotted"}}>Affective Science and Culture Lab</a> at Yale in Summer 2020
                to:
            </p>
            <div style={{margin: '0 auto', textAlign: 'justify'}}>
            <ol>
                <li>explore the cross-cultural (American and Chinese) linguistic differences in mental state inference</li>
                <li>inspect the ambiguous nature of affect labeling
                by compare people's peripheral physiological responses to different facial expressions including 
                novel expressions extracted from cross-cultural contexts.</li>
            </ol>
            </div>
        </div>
    )
}

export default Psychology