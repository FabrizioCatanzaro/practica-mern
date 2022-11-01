import React from 'react'

export default function BodyCard(props) {
    let {name, description} = props
return (
    <div id='ContenedorBodyCard'>
        <h3 className='itemBodyName'>{name.toUpperCase()}</h3>
        <h4 className='itemBodyDescription'>{description}</h4>
    </div>
)
}