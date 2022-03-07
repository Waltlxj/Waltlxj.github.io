import React from 'react'

const Psychology = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='docs-section'>
            <h6 className='docs-header'>Psychology</h6>
        </div>
    )
}

export default Psychology