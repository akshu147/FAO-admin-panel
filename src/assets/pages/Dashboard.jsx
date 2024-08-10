import { IoSpeedometerSharp } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import women from '../images/8-CQnrj2m9.jpg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [mywidth, setmywidth] = useState({
        firstwidth:"18%",
        secondwidth:"82%",
        status:"visible"
    
      })
      const changewidth = ()=> {
        if(mywidth.firstwidth=== "17%") {
          setmywidth({
            firstwidth:"0%",
            secondwidth:"100%",
            status:"hidden"
    
          })
        }
        if(mywidth.secondwidth === "100%"){
          setmywidth({
            firstwidth:"18%",
            secondwidth:"100%%",
            status:"visible"
          })
        }
      
      }
  return (
    <>
     <main>
      <div className="left" style={{width:mywidth.firstwidth, visibility:mywidth.status}}>
        <header className="text-center">Frank and Oak</header>
        <ul className="p-0 m-2">
     
          <Link style={{textDecoration:"none"}} to="/"><li><i className="px-3"><IoSpeedometerSharp/></i> Dashboard</li></Link>
          <Link style={{textDecoration:"none"}} to="/Color"><li><i className="px-3"><MdOutlineWaterDrop/></i> Colors</li></Link>
          <Link style={{textDecoration:"none"}} to="/Profile"><li><i className="px-3"><IoMdSettings/></i> Profile</li></Link>
   
          
        </ul>
        <div className="caption">Ecommerce Components</div>
        <ul className='p-0'>


        </ul>
      </div>
      <div className="right" style={{width:mywidth.secondwidth}}>
        <div className="inner">
          <div className="menu">
            <i className="pe-3" onClick={changewidth} ><RiMenu4Fill /></i>
            <span className="fw-bold">Dashboard</span>
          </div>
          <div className="img">
            <img width="100%x" src={women} alt="women pic" />
          </div>

        </div>
      </div>
        
    </main>
      
    </>
  )
}

export default Dashboard
