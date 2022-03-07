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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sodales ex. In in ornare leo, vitae dapibus mauris. Donec posuere volutpat nulla eu mollis. Phasellus tempor, diam ut vulputate congue, orci massa sollicitudin est, non semper lorem nulla ac libero. Donec fermentum tellus ut nunc dapibus pulvinar. Fusce luctus nunc vitae neque mollis scelerisque. Vivamus et libero varius, faucibus eros quis, rutrum urna. Nulla urna tellus, convallis vitae elit quis, pretium dictum tellus. Etiam consectetur euismod lectus at tincidunt. Cras nec molestie libero. In blandit diam consectetur libero egestas sagittis. Mauris blandit molestie mauris eu tristique. Duis a enim eget enim tincidunt cursus. Nunc sem diam, blandit nec dignissim vitae, consequat id mauris.

Aliquam dignissim urna arcu, et consectetur ante dictum ullamcorper. Nulla ante nulla, semper vitae erat pellentesque, eleifend ultricies lorem. Quisque mattis diam sit amet dapibus auctor. In in tellus eget est ullamcorper tincidunt. Nullam semper, dolor vitae condimentum imperdiet, nunc ante rhoncus libero, ut pharetra tortor ante vel orci. Donec lacus enim, ornare sed nisl at, tempus lobortis nibh. Cras sit amet purus vel dui sollicitudin scelerisque. Aliquam erat volutpat. Fusce rutrum sit amet purus eu facilisis. Morbi nibh felis, dictum sed nibh nec, congue eleifend purus.

Suspendisse interdum dui laoreet lorem efficitur, tincidunt pulvinar libero eleifend. In congue ullamcorper nulla ornare aliquam. Aliquam id arcu lectus. Praesent facilisis lectus ut risus blandit, non efficitur nulla congue. Mauris nec sollicitudin mauris. Nam fringilla elementum felis, sit amet faucibus felis finibus id. In dapibus felis sed lectus commodo suscipit. Ut vitae placerat enim, sit amet faucibus libero. Praesent condimentum, turpis luctus auctor condimentum, dolor neque pharetra dui, nec pellentesque nisi felis sit amet nulla. Nulla facilisi. Etiam ac lectus quis turpis efficitur pulvinar dapibus a mi. Nam vulputate nulla arcu, elementum congue sapien faucibus non.

Donec a lectus sollicitudin, finibus dolor nec, vehicula ipsum. Cras tristique pharetra tortor, vitae lacinia risus tempus quis. Vestibulum ac enim convallis, cursus tortor non, ornare tellus. Integer at vulputate tellus, a commodo leo. Vestibulum pharetra sem ut molestie fringilla. Integer eget porttitor lacus. Fusce sit amet lorem lectus. Nunc id dignissim mi. Nam iaculis sed augue in ullamcorper. In at dictum est, eget rhoncus dolor. Ut arcu nunc, luctus vitae laoreet nec, tempus et felis. Pellentesque leo dui, efficitur a porta ut, blandit vitae lorem. Vestibulum fermentum tempus dui, id maximus sapien mattis eu. Nullam arcu risus, sagittis eget tortor id, congue maximus purus.

Morbi condimentum ipsum id euismod sodales. Donec consectetur sapien consectetur nisi tempus, ac tempus tortor tempor. Aliquam aliquet tellus sit amet eros feugiat imperdiet quis nec lectus. Nunc porttitor ante ac turpis tincidunt volutpat. Pellentesque mattis risus odio, sed auctor ex viverra in. Quisque commodo elit vitae lectus sollicitudin dapibus. Morbi lacinia leo lorem. Duis sit amet libero sed felis efficitur sollicitudin eget et erat.</p>
        </div>
    )
}

export default Photos