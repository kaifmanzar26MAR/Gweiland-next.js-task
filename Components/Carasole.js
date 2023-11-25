import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import './Carasole.css'
const Carasole = () => {
    const arr=[{text:"Heritage Hoodies",img:"/images/cara1.jpg", dir:"100px"},
    {text:"heritage tees",img:"/images/cara2.jpg", dir:"1000px"},
    {text:"premium tees",img:"/images/cara3.jpg",dir:"100px"},
    {text:"premium zip hoddies",img:"/images/cara4.jpg",dir:"100px"},
    {text:"heritage woman's tank",img:"/images/cara5.jpg",dir:"1000px"}]
  return (
    <>
      <Carousel className='carasousel'
        autoPlay={true}
        animation='slide'
        indicators={false}
        
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        infiniteLoop={true}
        showThumbs={false}
        navButtonsProps={{
            style:{
                backgroundColor:"whitesmoke",
                color:"black",
                borderRadius:100,
                marginTop:-28,
                height:"104px"
            }
        }}>
        
            {
                arr.map((imag,i)=>{
                    return(
                        <>
                          
                            <img src={imag.img} alt="" className='banner_img' style={{zIndex:3}} key={i}/>
                            <div className="overlay">
                            </div>
                            <div className="carousel-text" style={{left:imag.dir, width:"100px",color:"white"}}>
                              <p>{imag.text}</p>
                             
                              <button id='btn'>Shope Now</button>
                            </div>
                                              
                        </>
                    )
                })
            }
        </Carousel>
    </>
  )
}

export default Carasole
