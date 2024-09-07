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
import { FaBasketShopping } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { VscCircleSmall } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa";
const Viewcategory = () => {

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
                        <li> <i><VscCircleSmall/></i><Link to="/admin-panel/size/sizedetail" className="text-decoration-none text-white">Size detail</Link></li>
                        <li> <i><VscCircleSmall/></i><Link to="/admin-panel/size/viewdetail" className="text-decoration-none text-white">View detail</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                <Accordion.Item eventKey="1">
                  <Accordion.Header><i className="px-2"><AiOutlineMenuUnfold /></i><span>Parent category</span></Accordion.Header>
                  <Accordion.Body>
                    <ul  className="p-0">
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/parentcategory/addcategory" className="text-decoration-none text-white"> Add category</Link></li>
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/parentcategory/viewcategory" className="text-decoration-none text-white"> View category</Link></li>
                    </ul> 

                  </Accordion.Body>
                </Accordion.Item>
                </li >
                <li className="p-0 my-1 mx-2">
                <Accordion.Item eventKey="2">
                  <Accordion.Header><i className="px-2"><HiOutlineShoppingCart /></i><span>Product category</span></Accordion.Header>
                  <Accordion.Body>
                    <ul  className="p-0">
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/product-category/addproduct-category" className="text-decoration-none text-white">Add product category</Link></li>
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/product-category/viewproductcategory" className="text-decoration-none text-white">view product category</Link></li>
                    </ul>

                  </Accordion.Body>
                </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                <Accordion.Item eventKey="3">
                  <Accordion.Header><i className="px-2"><FaBasketShopping /></i><span>Product</span></Accordion.Header>
                  <Accordion.Body>
                    <ul  className="p-0">
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/product/productdetail" className="text-decoration-none text-white">Product detail</Link></li>
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/product/productitems" className="text-decoration-none text-white">Product items</Link></li>
                    </ul>

                  </Accordion.Body>
                </Accordion.Item>
                </li>
                <li className="p-0 my-1 mx-2">
                <Accordion.Item eventKey="4">
                  <Accordion.Header><i className="px-2"><MdManageHistory /></i><span>Story</span></Accordion.Header>
                  <Accordion.Body>
                    <ul  className="p-0">
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/story/storydetail" className="text-decoration-none text-white">Story detail </Link></li>
                      <li> <i><VscCircleSmall/></i><Link to="/admin-panel/story/storyview" className="text-decoration-none text-white">Story view</Link></li>
                    </ul>

                  </Accordion.Body>
                </Accordion.Item>
                </li>
              </Accordion>

              <li className="border my-1 mx-2"><i className="px-2"><MdBorderColor/></i><span><Link to="/admin-panel/orders" className="text-decoration-none text-white">Orders</Link></span> </li>
              <li className="p-0 my-1 mx-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="px-2"><MdManageHistory /></i><span>Slider</span></Accordion.Header>
                    <Accordion.Body>
                      <ul className="p-0">
                        <li> <i><VscCircleSmall/></i><Link to="/admin-panel/slider/sliderdetail" className="text-decoration-none text-white">Slider detail</Link></li>
                        <li> <i><VscCircleSmall/></i><Link to="/admin-panel/slider/sliderview" className="text-decoration-none text-white">Slider view</Link></li>
                      </ul>

                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </li>
              <li className="my-1 mx-2"><i className="px-2"><FaFileContract/></i><span><Link to="/admin-panel/terms-condition" className="text-decoration-none text-white border" >Terms & Conditions</Link></span></li>
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
            <Link to="/admin-panel/deshboard" className="text-decoration-none"><span>Home</span></Link> / <span>Viewcategory</span>
          </div>
          <div className="commen-div">
                        <header>Add size</header>
                        <div className="commencontent">
                            <table>
                                <tr className="w-full">
                                    <th>Delete</th>
                                    <th>S.NO</th>
                                    <th>Category name</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                    <th>Statud</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Men's</td>
                                    <td><img height="50px" width="50px" src={women} alt=""/></td>
                                    <td>asdfsdf</td>
                                    <td><AiOutlineDelete className="text-danger cursor-pointer"/>  |  <FaRegEdit className="text-warning cursor-pointer"/></td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Men's</td>
                                    <td><img height="50px" width="50px" src={women} alt=""/></td>
                                    <td>descript flanasldf a;lskkf;la</td>
                                    <td><AiOutlineDelete className="text-danger cursor-pointer"/>  |  <FaRegEdit className="text-warning cursor-pointer"/></td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Men's</td>
                                    <td><img height="50px" width="50px" src={women} alt=""/></td>
                                    <td>descript flanasldf a;lskkf;la</td>
                                    <td><AiOutlineDelete className="text-danger cursor-pointer"/>  |  <FaRegEdit className="text-warning cursor-pointer"/></td>
                                    <td>Status</td>
                                </tr>
                            </table>
                        </div>
                    </div>

        </div>

      </main>

    </>
  )
}

export default Viewcategory
