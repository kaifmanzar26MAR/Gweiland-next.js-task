import React from 'react'
import Image from 'next/image'
import './Slider.css'
const Slider = () => {
  return (
    <div className='container_slider'>
      <div className="sliders">
        <div className="slide-track">
            <div className="slide_s" style={{backgroundColor:"#ff8a8a"}}>
                <Image src="/images/s1.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>crypto</h2>
                    <a href="#crypto">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#a051d0"}}>
                <Image src="/images/s2.jpg" alt='s1' width={100} height={100}  className='img'/>
                <div className="inner" >
                    <h2>dnkey</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"black", color:"white"}}>
                <Image src="/images/s3.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>hosky</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#216cd2"}}>
                <Image src="/images/s4.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>hosky</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#3e3e3e", color:"white"}}>
                <Image src="/images/s5.jpg" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>fest</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"black", color:"white"}}>
                <Image src="/images/s6.jpg" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>pandu</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#ff8a8a"}}>
                <Image src="/images/s1.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>crypto</h2>
                    <a href="#crypto">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#a051d0"}}>
                <Image src="/images/s2.jpg" alt='s1' width={100} height={100}  className='img'/>
                <div className="inner" >
                    <h2>dnkey</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"black", color:"white"}}>
                <Image src="/images/s3.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>hosky</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#216cd2"}}>
                <Image src="/images/s4.png" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>hosky</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"#3e3e3e", color:"white"}}>
                <Image src="/images/s5.jpg" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>fest</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            <div className="slide_s" style={{backgroundColor:"black", color:"white"}}>
                <Image src="/images/s6.jpg" alt='s1' width={100} height={100} className='img'/>
                <div className="inner">
                    <h2>pandu</h2>
                    <a href="/">shop now</a>
                </div>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Slider
