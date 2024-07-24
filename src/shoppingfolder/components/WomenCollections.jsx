
import React from 'react'
import "../../App.css"
import ladiesbanner from "../../assets/ladiesbanner.jpg"


const WomanCollections =  ({ladiesFashion}) => {
  return (

    <div className='collectionSection'>
      <h2>{ladiesFashion.title}</h2>
      <div className="bannerbox">
      <img src= {ladiesbanner} alt="ladiesbanner" />
      
       </div>
     

      <div className="menImages">
        <img src={ladiesFashion.image7} alt={"image not working"} />
        <img src={ladiesFashion.image8} alt={"image not working"} />
        <img src={ladiesFashion.image9} alt={"image not working"} />
        <img src={ladiesFashion.image10} alt={"image not working"} />
        <img src={ladiesFashion.image11} alt={"image not working"} />
        <img src={ladiesFashion.image12} alt={"image not working"} />
      </div>
    </div>
   
  )
}

export default WomanCollections