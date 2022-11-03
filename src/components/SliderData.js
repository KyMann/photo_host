import Neuschwanstein from '../resources/images/headers/NeuschwansteinHeader.jpg'
import StMichel from '../resources/images/headers/StMichelHeader.jpg'
import masterData from '../resources/data.json'

import { NeuschwansteinData } from './NeuschwansteinData'
import { StMichelData } from './StMichelData'

export const SliderData = [
    
    {
        name:"Neuschwanstein",
        image:Neuschwanstein,
        data: masterData.Neuschwanstein,
        subSliderData: NeuschwansteinData
    },
    {
        name:"St Michel",
        image:StMichel,
        data: masterData.StMichel,
        subSliderData: StMichelData
    },

]
//TODO: figure out how to import things automatically