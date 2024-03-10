import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Breadcrumb from '../components/Breadcrumb'

const Dashobard = () => {
  return (
    <DefaultLayout>
    <Breadcrumb pageName="Dashboard / " />
    <p>Dashboard analytics will be here</p>
   </DefaultLayout>
  )
}

export default Dashobard