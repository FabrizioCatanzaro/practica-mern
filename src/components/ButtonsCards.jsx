import React from 'react'

export default function ButtonCard(props) {
  let {value, evento, clases} = props;
  return (
    <div id='ContenedorButtons'>
      <button type="button" onClick={evento} className={clases} >{value}</button>
    </div>
)
}