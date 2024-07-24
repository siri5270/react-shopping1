import banner from "../../assets/banner.jpg"
import React from 'react'

const Banner = () => {
  return (
    <div className="bannerSection">
      <div className="bannerbox">
        <img src ={banner}  alt='banner' />
        </div>
      </div>
  )
}

export default Banner