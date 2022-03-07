import React from 'react'

const Psychology = () => {
    React.useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Psychology</h6>
            <p>
            I am very interested in psychology, especially social psychology.
            The study of psychology has helped me find ways to understand myself and my place in the world.

            </p>
        </div>
    )
}

export default Psychology