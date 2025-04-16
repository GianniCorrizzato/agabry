import Image from 'next/image'
import React from 'react'

interface Props {
  image: string,
  title: string,
  description: string
}

const Card = ({image, title, description}: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    
    <figure >
      <div className='relative w-full h-80'>
      <Image
        src={image}
        alt={title} 
        fill className='object-cover'/>
        </div>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
    
    </div>
  </div>
  )
}

export default Card