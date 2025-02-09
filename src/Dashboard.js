import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import { ToastContainer, toast } from 'react-toastify';
// import App from './App';

function Dashboard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:1,
    autoplay:true,
    autoplaySpeed:1000
  };
  const[Lable1,setLable1] = useState(localStorage.getItem('email'))
  const[Lable2,setLable2] = useState(localStorage.getItem('password'))
  
  useEffect(() =>{
    toast.success("Welcome to dashboard"+" "+(Lable1))
  },[]);

  return (
    <div className='dash'>
      <ToastContainer />
        <h1>This is my Dashboard</h1>
        <Slider {...settings}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
<div>
  <label>{Lable1}</label>
  <label>{Lable2}</label>
</div>

    </div>
  )
}

export default Dashboard