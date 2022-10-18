import React from 'react'

const InfoScreen = ({ infoJSON }) => {

    const objectMap = (obj) => {
       return Object.keys(obj).map((key, index) => {return displayFullData(key, obj)} )
       
    }

    const displayFullData = (key, obj) => {
        if (obj[key] !== '') {
            return (
                <p className='text' key={key}>{key}: {obj[key]}</p>
            )
        }
    }

    return (
        <section className="infoBox">
            {objectMap(infoJSON)}
        </section>
      )
}


export default InfoScreen