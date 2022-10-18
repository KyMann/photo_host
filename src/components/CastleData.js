import CastleHeader from '../resources/images/headers/Castle.jpg'
import CastlePic1 from '../resources/images/Castle/Castle1.jpg'
import CastleVid1 from '../resources/images/Castle/Castle34.mp4'
import masterData from '../resources/data.json'



export const CastleData = [
    {
        name:"Castle",
        image:CastleHeader,
        data: masterData.Castle,
    },
    {
        name:"Castle",
        image:CastlePic1,
        data: masterData.Castle,
    },
    {
        name:"Castle",
        image:CastleVid1,
        data: masterData.Castle,
        type: 'video',
    },
    
]