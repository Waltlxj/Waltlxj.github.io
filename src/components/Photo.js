import React from 'react'
import './Photo.css'

const Photos = () => {
    React.useEffect(() => {
        setTimeout(() => {
            // console.log('hi')
            window.scroll({ top: 350, behavior: 'smooth' });
        }, 500)
      }, []);
    return (
        <div className='docs-section' data-theme='dark'>
            <h6 className='docs-header'>Photos</h6>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52022245873/in/datetaken-public/" title="DSC06244-1">
                <img className="photo" src="https://live.staticflickr.com/65535/52022245873_39c97d6618_b.jpg" alt="Sunset"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52066600443/in/datetaken-public/" title="DSC07992_01">
                <img className="photo" src="https://live.staticflickr.com/65535/52066600443_1deb28139a_b.jpg" alt="McKnight Prairie" />
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52066923458/in/datetaken/" title="DSC07990 3.16.52 PM">
                <img className="photo" src="https://live.staticflickr.com/65535/52066923458_4868a22ba9_b.jpg" alt="Northfield"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52025782195/in/datetaken-public/" title="DSC07669">
                <img className="photo" src="https://live.staticflickr.com/65535/52025782195_81148f125d_b.jpg" alt="Fox squirrel"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52021171227/in/datetaken-public/" title="DSC06546-1">
                <img className="photo" src="https://live.staticflickr.com/65535/52021171227_0bd109a6b6_b.jpg" alt="Fern"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52022726185/in/datetaken-public/" title="DSC06531-1">
                <img className="photo" src="https://live.staticflickr.com/65535/52022726185_e681ff27f3_b.jpg" alt="Jungle"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52022197991/in/datetaken-public/" title="DSC03895-1">
                <img className="photo" src="https://live.staticflickr.com/65535/52022197991_f6ae36ab68_b.jpg" alt="Ruins"/>
            </a>
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/192637096@N03/52022715970/in/datetaken-public/" title="DSC03061">
                <img className="photo" src="https://live.staticflickr.com/65535/52022715970_3942963f49_b.jpg" alt="Agave"/>
            </a>
        </div>
    )
}

export default Photos