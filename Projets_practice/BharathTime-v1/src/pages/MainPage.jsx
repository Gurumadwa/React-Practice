import React from 'react'
import Heading from '../components/Heading'
import Detail from '../components/Detail'
import MainTime from '../components/MainTime'

const MainPage = () => {
  return (
    <div>
        <div className="card-center">
        <Heading></Heading>
        <Detail></Detail>
        <MainTime></MainTime>
        </div>
    </div>
  )
}

export default MainPage