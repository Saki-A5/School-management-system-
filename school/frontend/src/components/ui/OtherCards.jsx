import Image from 'next/image'
import React from 'react'

export const OtherCards = ({description, text, image}) => {
  return (
    <div className='bg-LightPurple w-full flex justify-between rounded-[15px]'>
        <div className='py-6 px-5'>
            <p className='mb-6'>{description}</p>
            <button className='bg-Purple px-8 py-1 text-white rounded-4xl'>{text}</button>
        </div>
        <Image alt="" src={image} width={96} height={96}/>
    </div>
  )
}
