import React from 'react'
import Head from '../componant/Head'
import { Outlet } from 'react-router-dom'

const Routerlayout = () => {
  return (
    <>
    <Head/>  
    <Outlet/>
    </>
  )
}

export default Routerlayout
