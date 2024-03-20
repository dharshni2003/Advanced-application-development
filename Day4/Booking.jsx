import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import "./Booking.css"
import hall1 from "../assets/images/hall1.jpg"
import hall2 from "../assets/images/hall2.jpg"
import hall3 from "../assets/images/hall3.webp"
import deco1 from "../assets/images/deco1.webp"
import deco2 from "../assets/images/deco2.jpeg"
import deco3 from "../assets/images/deco3.jpg"
import eve1 from "../assets/images/eve1.jpeg"
import eve2 from "../assets/images/eve2.webp"
import eve3 from "../assets/images/eve3.webp"
import food1 from "../assets/images/food1.jpg"
import food2 from "../assets/images/food2.jpg"
import food3 from "../assets/images/food3.jpg"
import add1 from "../assets/images/add1.avif"
import add2 from "../assets/images/add2.jpg"
import add3 from "../assets/images/add3.png"
import b from "../assets/images/b.jpg"
function Booking() {
  return (
    <div>
    <Header/>
    
    <div className="ven"></div>
    <div className="hall">
    VENUE</div>
    <div className="containerbook">
    <div className="boxvenue10">
    <img src={hall1} height={200} width={200}></img>
    <p>MEGA</p>
    <p1>  "Location:  RS puram,COIMBATORE"</p1>
    <p2>"Price:7 Lakhs/-per day"</p2>
    </div>
    <div className="boxvenue11">
    <img src={hall2} height={200} width={200}></img>
    <p>MINI</p>
    <p1>"Location:  Kovaipudhur,COIMBATORE"</p1>
    <p2>"Price:3 Lakhs/-per day</p2>
    </div>
    <div className="boxvenue12">
    <img src={hall3} height={200} width={200}></img>
    <p>MEDIUM</p>
    <p1>"Location:  Ukkadam,COIMBATORE"</p1>
    <p2>"Price:5 Lakhs/- per day</p2>
    </div>
    </div>
    <div className="dec"></div>
    <div className="decoration">
    DECORATION</div>
    <div className="containerdeco">
    <div className="boxdeco10">
    <img src={deco1} height={200} width={200}></img>
    <p>SIMPLE</p>
    <p1>"Price- Rs.4000/-"</p1>
    </div>
    <div className="boxdeco11">
    <img src={deco2} height={200} width={200}></img>
    <p>CLASSY</p>
    <p1>"Price- 15,000/-"</p1>
    </div>
    <div className="boxdeco12">
    <img src={deco3} height={200} width={200}></img>
    <p>GRAND</p>
    <p1>"Price- 75,000/-"</p1>
    </div>
    </div>
    <div className="eve"></div>
    <div className="events">
    PARTY EVENTS</div>
    <div className="containereve">
    <div className="boxeve10">
    <img src={eve1} height={200} width={200}></img>
    <p>MARRIAGE</p>
    </div>
    <div className="boxeve11">
    <img src={eve2} height={200} width={200}></img>
    <p>BIRTHDAY</p>
    </div>
    <div className="boxeve12">
    <img src={eve3} height={200} width={200}></img>
    <p>BACHELLORATE</p>
    </div>
    </div>
    <div className="food"></div>
    <div className="foodmenu">
    MENU LIST</div>
    <div className="containerfood">
    <div className="boxfood10">
    <img src={food2} height={200} width={200}></img>
    <p>VEG</p>
    <p1>Price: Rs.30,000/- 100ppls</p1>
    </div>
    <div className="boxfood11">
    <img src={food1} height={200} width={250}></img>
    <p>NON-VEG</p>
    <p1>Price: Rs.55,000/- 100ppls</p1>
    </div>
    <div className="boxfood12">
    <img src={food3} height={200} width={200}></img>
    <p>COMBO</p>
    <p1>Price: Rs.70k/-</p1>
    </div>
    </div>
    <div className="add"></div>
    <div className="addon">
    ADDONS</div>
    <div className="containeradd">
    <div className="boxadd10">
    <img src={add1} height={200} width={200}></img>
    <p>MAGIC SHOW</p>
    <p1>Price: Rs.5,000/- </p1>
    </div>
    <div className="boxadd11">
    <img src={add2} height={200} width={250}></img>
    <p>DJ</p>
    <p1>Price: Rs.20,000/- </p1>
    </div>
    <div className="boxadd12">
    <img src={add3} height={200} width={200}></img>
    <p>FOOD STALL</p>
    <p1>Price: Rs.20k/-</p1>
    </div>
    </div>

    </div>
  )
}

export default Booking