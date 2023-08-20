import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5},
    };    

    const iteams=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
    return (
        <div>
            <AliceCarousel
            items={iteams}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
    />
        </div>
    )
}

export default HomeSectionCarosel