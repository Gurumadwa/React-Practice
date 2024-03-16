import React from 'react'
import Heading from '../components/Heading'
import FoodItems from '../components/FoodItems'
import s from '../styles/Items.module.css'

const Items = () => {
  return (
    <div className={s.container}>
        <Heading></Heading>
        <FoodItems></FoodItems>
    </div>
  )
}

export default Items