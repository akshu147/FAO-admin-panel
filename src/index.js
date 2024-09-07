import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './assets/pages/Dashboard';
import Color from './assets/pages/Color';
import Profile from './assets/pages/Profile';
import Sizedetail from './assets/pages/Sizedetail';
import VIewdetail from './assets/pages/VIewdetail';
import Addcategory from './assets/pages/Addcategory';
import Viewcategory from './assets/pages/Viewcategory';
import Addproductcategory from './assets/pages/Addproductcategory';
import Viewproductcategory from './assets/pages/Viewproductcategory';
import Productdetail from './assets/pages/Productdetail';
import Productitems from './assets/pages/Productitems';
import Storydetail from './assets/pages/Storydetail';
import Storyview from './assets/pages/Storyview';
import Orders from './assets/pages/Orders';
import Sliderdetail from './assets/pages/Sliderdetail';
import Sliderview from './assets/pages/Sliderview';
import Termscondition from './assets/pages/Termscondition';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  {
    path:"/admin-panel/deshboard",
    element:<Dashboard/>
  },
  {
    path:"/admin-panel/Color",
    element:<Color/>
  },
  {
    path:"/admin-panel/Profile",
    element:<Profile/>
  },
  {
    path:"/admin-panel/size/sizedetail",
    element:<Sizedetail/>
  },
  {
    path:"/admin-panel/size/viewdetail",
    element:<VIewdetail/>
  },
  {
    path:"/admin-panel/parentcategory/Viewcategory",
    element:<Viewcategory/>
  },
  {
    path:"/admin-panel/product-category/addproduct-category",
    element:<Addproductcategory/>
  },
  {
    path:"/admin-panel/product-category/viewproductcategory",
    element:<Viewproductcategory/>
  },
  {
    path:"/admin-panel/parentcategory/addcategory",
    element:<Addcategory/>
  },
  {
    path:"/admin-panel/product/productdetail",
    element:<Productdetail/>
  },
  {
    path:"/admin-panel/product/productitems",
    element:<Productitems/>
  },
  {
    path:"/admin-panel/story/storydetail",
    element:<Storydetail/>
  },
  {
    path:"/admin-panel/story/storyview",
    element:<Storyview/>
  },
  {
    path:"/admin-panel/orders",
    element:<Orders/>
  },
  {
    path:"/admin-panel/slider/sliderdetail",
    element:<Sliderdetail/>
  },
  {
    path:"/admin-panel/slider/sliderview",
    element:<Sliderview/>
  },
  {
    path:"/admin-panel/terms-condition",
    element:<Termscondition/>
  }

])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
