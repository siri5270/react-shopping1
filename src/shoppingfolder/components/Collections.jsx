import React from 'react'
import "../../App.css"

const Collections =  ({gentsFashion}) => {
 
  return (
    <div className='collectionSection'>
      <h2>{gentsFashion.title}</h2>

      <div className="menImages">
        <img src={gentsFashion.image1} alt={"image not working"} />
        <img src={gentsFashion.image2} alt={"image not working"} />
        <img src={gentsFashion.image3} alt={"image not working"} />
        <img src={gentsFashion.image4} alt={"image not working"} />
        <img src={gentsFashion.image5} alt={"image not working"} />
        <img src={gentsFashion.image6} alt={"image not working"} />
      </div>
    </div>
  )
}

export default Collections