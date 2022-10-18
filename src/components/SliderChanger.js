import React, {useState} from 'react';
import ImageSlider from './ImageSlider.js'

const Changer = ({NestedPhotoArray}) => {
    const [photoArray, setPhotoArray] = useState(NestedPhotoArray[0]) 


    return <div>
        <ImageSlider slides={photoArray}/>
    </div>
}

export default Changer