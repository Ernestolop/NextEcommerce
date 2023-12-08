import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const SlideShow = ({ images }) => {
    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators
        >
            {
                images.map(image => {
                    const url = `/products/${image}`;
                    return (
                        <div className='??' key={image}>
                            <div style={{
                                ...divStyle,
                                backgroundImage: `url(${url})`,
                                backgroundSize: 'cover',
                            }}>
                            </div>
                        </div>
                    )
                })
            }
        </Slide>
    )
}

export default SlideShow;