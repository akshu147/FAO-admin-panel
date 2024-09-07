import { IoSpeedometerSharp } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import women from '../images/8-CQnrj2m9.jpg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { LuPointer } from "react-icons/lu";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBasketShopping, FaYoutube } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { VscCircleSmall } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import frandandlogo from '../images/download.png'
const Profile = () => {

  const [mywidth, setmywidth] = useState({
    firstwidth: "18%",
    secondwidth: "82%",
    status: "visible"

  })
  const changewidth = () => {
    if (mywidth.firstwidth === "18%") {
      setmywidth({
        firstwidth: "0%",
        secondwidth: "100%",
        status: "hidden"

      })
    }
    if (mywidth.secondwidth === "100%") {
      setmywidth({
        firstwidth: "18%",
        secondwidth: "82%",
        status: "visible"
      })
    }

  }
  if (window.innerWidth <= 990) {
    setmywidth({
      firstwidth: "0",
      secondwidth: "100%"
    })


  }


  return (
    <>
      <main>
        <div className="left" style={{ width: mywidth.firstwidth, visibility: mywidth.status }}>
          <header className="text-center w-full">Frank and Oak</header>
          <ul className="p-0 m-2">

            <Link style={{ textDecoration: "none" }} to="/admin-panel/deshboard"><li><i className="px-2"><IoSpeedometerSharp /></i> Dashboard</li></Link>
            <Link style={{ textDecoration: "none" }} to="/admin-panel/Color"><li><i className="px-2"><MdOutlineWaterDrop /></i> Colors</li></Link>
            <Link style={{ textDecoration: "none" }} to="/admin-panel/Profile"><li><i className="px-2"><IoMdSettings /></i> Profile</li></Link>


          </ul>
          <div className="caption py-3">Ecommerce Components</div>
          <divhh>
            <ul className='p-0'>

              <Accordion defaultActiveKey="">
                <li className="p-0 my-1 mx-2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="px-2"><LuPointer /></i><span>Size</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/size/sizedetail" className="text-decoration-none text-white">Size detail</Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/size/viewdetail" className="text-decoration-none text-white">View detail</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><i className="px-2"><AiOutlineMenuUnfold /></i><span>Parent category</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/parentcategory/addcategory" className="text-decoration-none text-white"> Add category</Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/parentcategory/viewcategory" className="text-decoration-none text-white"> View category</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li >
                <li className="p-0 my-1 mx-2">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><i className="px-2"><HiOutlineShoppingCart /></i><span>Product category</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/product-category/addproduct-category" className="text-decoration-none text-white">Add product category</Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/product-category/viewproductcategory" className="text-decoration-none text-white">view product category</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><i className="px-2"><FaBasketShopping /></i><span>Product</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/product/productdetail" className="text-decoration-none text-white">Product detail</Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/product/productitems" className="text-decoration-none text-white">Product items</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header><i className="px-2"><MdManageHistory /></i><span>Story</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/story/storydetail" className="text-decoration-none text-white">Story detail </Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/story/storyview" className="text-decoration-none text-white">Story view</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li>
              </Accordion>


              <li className="border my-1 mx-2"><i className="px-2"><MdBorderColor /></i><span><Link to="/admin-panel/orders" className="text-decoration-none text-white">Orders</Link></span> </li>
              <li className="p-0 my-1 mx-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="px-2"><MdManageHistory /></i><span>Slider</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/slider/sliderdetail" className="text-decoration-none text-white">Slider detail</Link></li>
                        <li> <i><VscCircleSmall /></i><Link to="/admin-panel/slider/sliderview" className="text-decoration-none text-white">Slider view</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </li>
              <li className="my-1 mx-2 border"><i className="px-2"><FaFileContract /></i><span><Link to="/admin-panel/terms-condition" className="text-decoration-none text-white" >Terms & Conditions</Link></span></li>
            </ul>


          </divhh>


        </div>
        <div className="right" style={{ width: mywidth.secondwidth }}>
          <div className="navbar">
            <div className="menu">
              <i className="pt-0 pe-3" onClick={changewidth} ><RiMenu4Fill /></i>
              <span className="fw-bold">Dashboard</span>
            </div>
            <div className="img">
              <img width="100%x" src={women} alt="women pic" />
            </div>

          </div>


          <div className="deshboard-navigation flex">
            <Link to="/admin-panel/deshboard" className="text-decoration-none"><span>Home</span></Link> / <span>proflie</span>
          </div>
          <div className="commen-div">
            <header>Add size</header>
            <div className="commencontent">
              <div className="d-flex justify-content-between">
                <div className="w-50">
                  <p className="pb-4 m-0">Size name</p>
                  <input type="text" value="mr Tony stark" />
                  <p className="py-3">Social links</p>
                </div>
                <div className="pe-5">
                  <img src={women} height="130px" width="130px" className="rounded-circle" alt="" />
                  <p className="text-center">Proflle image</p>

                </div>
              </div>

              <div className="links">
                <div className="d-flex items-center gap-3"><caption className="text-white"><FaFacebookF /></caption> <input type="url" value="https://www.facebook.com/help/668969529866328" /></div>
                <div className="d-flex items-center my-4 gap-3"><caption className="text-white"><FaInstagram /></caption> <input type="url" value="https://www.facebook.com/help/668969529866328" /></div>
                <div className="d-flex items-center gap-3"><caption className="text-white"><FaYoutube /></caption> <input type="url" value="https://www.facebook.com/help/668969529866328" /></div>
                <div className="d-flex items-center  my-4 gap-3"><caption className="text-white"><BsTwitterX /></caption> <input type="url" value="https://www.facebook.com/help/668969529866328" /></div>
              </div>
              <p>Logo</p>
              <img height="50px" width="50px" src={frandandlogo} alt="Logo" />
              <p className="pt-3">Sub logo</p>
              <img height="50px" width="50px" src="http://localhost:3000/favicon.ico" alt="Sub logo" />
              <p className="pt-3 pb-1">Password</p>
              <input className="d-block my-3" type="password" value="234342323" />
              <button className="mybtn">Update</button>
            </div>
          </div>
          <div className="commen-div">
            <header>Add size</header>
            <div className="commencontent">
              <form action="">
                <label className="pb-4 m-0" for="Email">Email</label>
                <input type="text" value={`sumsajangid2002@gmail.com`} placeholder="Size name" />
                <label className="py-3 m-0 d-block" for="Email">Otp</label>
                <input type="text" value={`Chin tapaak dam dam`} placeholder="Size name" />

                <button className="mybtn mt-3">Add size</button>
              </form>
            </div>
          </div>
        </div>

      </main>



    </>
  )
}

export default Profile
