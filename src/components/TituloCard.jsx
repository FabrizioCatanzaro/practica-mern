import React from 'react'

export default function TituloCard(props) {
    let {category, photo} = props
  return (
    <>
        <h2 className='tituloCard'>{category}</h2>
        <img src={photo} className='photoCard' alt=""></img>
    </>
  )
}