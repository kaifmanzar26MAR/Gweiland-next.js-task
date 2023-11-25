"use client"
import React, { useEffect } from 'react'
import "./NavBar.css"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'
import { FaTwitter,FaInstagram,FaFacebook,FaHamburger,FaUser,FaCartPlus,FaSearch} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { document } from 'postcss';



const NavBar = () => {

    const [NavBar,setNavBar]=useState(false);
    const toggle=()=>{
        if(NavBar==false){
            setNavBar(true);
            document.getElementById('xxxup').style.display="flex";
            document.getElementById('xxxdw').style.display="flex";
        }else{
            setNavBar(false);
            document.getElementById('xxxup').style.display="none";
            document.getElementById('xxxdw').style.display="none";
        }
    }
    const brands_fun=()=>{
        if(NavBar==true){
            document.getElementById('br_h').style.display="flex";
        }
    }
    const shop_fun=()=>{
        if(NavBar==true){
            document.getElementById('sc').style.display="flex";
        }
    }
    const close_brand=()=>{
        document.getElementById('br_h').style.display="none";
    }
    const back_shop=()=>{
        document.getElementById('sc').style.display="none";
    }
    const apparol_click=()=>{
        if(NavBar==true){
            document.getElementById('apo').style.display="flex";
        }
    }
    const close_apparol=()=>{
        document.getElementById('apo').style.display="none";
    }
    const home_click=()=>{
        if(NavBar==true){
            document.getElementById('hout').style.display="flex";
        }
    }
    const close_home=()=>{
        document.getElementById('hout').style.display="none";
    }
    useEffect(()=>{
        setNavBar(false);
        document.getElementById('hout').style.display="none";
        document.getElementById('apo').style.display="none";
        document.getElementById('sc').style.display="none";
        document.getElementById('xxxup').style.display="none";
        document.getElementById('xxxdw').style.display="none";
        document.getElementById('br_h').style.display="none";
    });
    

  return (
    <>
        <nav className='w-full bg-neutral-800 top-0 left-0 right-0 z-10 sticky'>
            <div className='p-2 justify-between flex ml-10 mr-10 text-white items-center'>
                <div className='hamburger ' onClick={()=>toggle()}>
                   {!NavBar ? <FaHamburger size={20} className='box'/> : <span style={{color:"red"}}>X</span>} 
                </div>
                
                <div className="topnav up text-white  gap-6" id='xxxup'>
                    <Link href="#home" className='icon_link text_hover brands'  onClick={()=>brands_fun()}>brands <span className='arrow'><IoIosArrowForward size={15} /></span></Link>
                    <Link href="#news" className='icon_link text_hover shop'  onClick={()=>shop_fun()}>shop <span className='arrow'><IoIosArrowForward size={15} /></span></Link>
                    <Link href="#contact" className='icon_link text_hover'>premium</Link>
                    <Link href="#about" className='icon_link text_hover'>gift cards</Link>
                    
                </div>
                <div className="hower_menue_brands" id='br_h'>
                    <ol>
                        <li><Link  href="/" className='back_brand' onClick={()=>{close_brand()}}>{'<'}- &nbsp; brands</Link></li>
                        <li><Link className='text_hover' href="/">all brands</Link></li>
                        <li><Link className='text_hover' href="/">$hosky</Link></li>
                        <li><Link className='text_hover' href="/">bitfins</Link></li>
                        <li><Link className='text_hover' href="/">cardano stonerz club</Link></li>
                        <li><Link className='text_hover' href="/">cryptoraggies</Link></li>
                        <li><Link className='text_hover' href="/">danketsu</Link></li>
                        <li><Link className='text_hover' href="/">future fast</Link></li>
                        <li><Link className='text_hover' href="/">pendulum</Link></li>
                        <li><Link className='text_hover' href="/">vudu brigada</Link></li>
                    </ol>
                </div>
                <div className="hower_menue_shop" id='h_m_s'>
                    <div className="apparol">
                        <h2 className='text_hover'>apparol</h2>
                        <ol>
                            <li><Link className='text_hover' href="/">unisex hoodies</Link></li>
                            <li><Link className='text_hover' href="/">unisex zip hoodies</Link></li>
                            <li><Link className='text_hover' href="/">unisex sweatshirts</Link></li>
                            <li><Link className='text_hover' href="/">unisex tees</Link></li>
                            <li><Link className='text_hover' href="/">women's tanks</Link></li>
                            <li><Link className='text_hover' href="/">unisex tankss</Link></li>
                        </ol>
                    </div>
                    <div className="home">
                    <h2 className='text_hover'>home</h2>
                        <ol>
                            <li><Link className='text_hover' href="/">phone case</Link></li>
                            <li><Link className='text_hover' href="/">framed posters</Link></li>
                            <li><Link className='text_hover' href="/">posters</Link></li>
                        </ol>
                    </div>
                </div>

                {/* clicke menue */}
                <div className="shop_click" id='sc'>
                    <ol>
                        <li><Link href="/" onClick={()=>{back_shop()}} className='pt-0'><span>{'<'}-</span> shop</Link></li>
                        <li><Link href="/" className='text_hover icon_link t ' onClick={()=>{apparol_click()}}>apparol <span className='ar'><IoIosArrowForward size={15} /></span></Link></li>
                        <li><Link href="/" className='text_hover icon_link t ' onClick={()=>{home_click()}}>home <span className='ar'><IoIosArrowForward size={15} /></span></Link></li>
                    </ol>
                </div>
                <div className="apparol_out" id='apo'>
                    <ol>
                        <Link  href="/" onClick={()=>{close_apparol()}}> <span>{'<'}-</span> apparol</Link>
                        <li><Link className='text_hover' href="/">unisex hoodies</Link></li>
                        <li><Link className='text_hover' href="/">unisex zip hoodies</Link></li>
                        <li><Link className='text_hover' href="/">unisex sweatshirts</Link></li>
                        <li><Link className='text_hover' href="/">unisex tees</Link></li>
                        <li><Link className='text_hover' href="/">women's tanks</Link></li>
                        <li><Link className='text_hover' href="/">unisex tankss</Link></li>
                    </ol>
                </div>
                <div className="home_out" id='hout'>
                    <ol>
                        <Link href="/" onClick={()=>{close_home()}}><span>{'<'}-</span> home</Link>
                        <li><Link className='text_hover' href="/">phone case</Link></li>
                        <li><Link className='text_hover' href="/">framed posters</Link></li>
                        <li><Link className='text_hover' href="/">posters</Link></li>
                    </ol>
                </div>
                
                <Link href="/">
                    <Image src="/images/Artboard_1.png" alt='LOGO' width={129} height={50} className='ml-12'/>
                </Link>

                <div className="right_container_nav flex gap-6" >
                    <div className='topnav down  gap-6' id='xxxdw'>
                        <Link href="/" className='icon_link text_hover'> become an affilate</Link>
                        <div className='flex gap-6'>
                            <Link href="/" className='icon_link'><FaTwitter size={20} className='icon_hover'/> </Link>
                            <Link href="/" className='icon_link'><FaInstagram size={20} className='icon_hover'/></Link>
                            <Link href="/" className='icon_link'><FaFacebook size={20} className='icon_hover'/></Link>
                        </div>
                        
                    </div>

                    <div className="profile">
                        <Link href='/' className='icon_link'><FaUser size={20} className='icon_hover'/></Link>
                    </div>
                    <div className="sera flex gap-6">
                        <Link href='/' className='icon_link'><FaSearch size={20} className='icon_hover'/></Link>
                        <Link href='/' className='icon_link'><FaCartPlus size={20} className='icon_hover'/></Link>
                    </div>
                </div>

                <div className="login">
                    <Link href='/' ><FaUser size={15}/></Link>
                    <span>login</span>
                </div>

                
            </div>
        </nav>
      
    </>
  )
}

export default NavBar
