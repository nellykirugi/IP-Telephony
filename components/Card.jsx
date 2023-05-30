import React from 'react'

const Card = ({ext,dpt,campus}) => {
  return (
    <div className='text-black bg-green-600 flex justify-between px-2 py-1 font-semibold text-lg w-[400px] rounded-sm shadow-md shadow-black'>
      <h2>{ext}</h2>
      <h3>{dpt}</h3>
      <h4>{campus}</h4>
    </div>
  )
}

export default Card
