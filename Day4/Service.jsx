import React from 'react'
import './Service.css'
import Header from './Header'
import ga1 from "../assets/images/ga1.jpg"
import ga2 from "../assets/images/ga2.jpg"
import ga3 from "../assets/images/ga3.avif"
import ga4 from "../assets/images/ga4.jpg"
import set1 from "../assets/images/set1.avif"
import set2 from "../assets/images/set2.webp"
import set3 from "../assets/images/set3.webp"
import set4 from "../assets/images/set4.png"
import bacc1 from "../assets/images/bacc1.avif"
import bacc2 from "../assets/images/bacc2.webp"
import bacc3 from "../assets/images/bacc3.jpg"
import bacc4 from "../assets/images/bacc4.jpg"

function Service() {
  return (
    <div>
    <Header/>
    <div className="service" id="service">
    <h1 className="topic"> OUR <span>Gallery</span></h1>
    
    <div className="gallaryboc10">
    <div className="gallary10">
    <img src={ga1} height={200} width={200}></img>
    </div>
    <div className="gallary11">
    <img src={ga2} height={200} width={200}></img>
    </div>
    <div className="gallary12">
    <img src={ga3} height={200} width={200}></img>
    </div>
    <div className="gallary13">
    <img src={ga4} height={200} width={200}></img>
    </div>
    </div>
    <div className="set">
    <div className="set1">
    <img src={set1} height={200} width={200}></img>
    </div>
    <div className="set2">
    <img src={set2} height={200} width={200}></img>
    </div>
    <div className="set3">
    <img src={set3} height={200} width={200}></img>
    </div>
    <div className="set4">
    <img src={set4} height={200} width={200}></img>
    </div>
    </div>
    <div className="bacc">
    <div className="bacc1">
    <img src={bacc1} height={200} width={200}></img>
    </div>
    <div className="bacc2">
    <img src={bacc2} height={200} width={200}></img>
    </div>
    <div className="bacc3">
    <img src={bacc3} height={200} width={200}></img>
    </div>
    <div className="bacc4">
    <img src={bacc4} height={200} width={200}></img>
    </div>
    </div>
    </div>
    </div>
  
  )
}

export default Service