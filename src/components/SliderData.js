import Castle from '../resources/images/headers/castle.jpg'
import masterData from '../resources/data.json'

import { CastleData } from './CastleData'

export const SliderData = [
    
    {
        name:"Castle",
        image:Castle,
        data: masterData.Castle,
        subSliderData: CastleData
    },

]
//TODO: figure out how to import things automatically