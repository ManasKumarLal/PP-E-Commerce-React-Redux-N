import React from 'react'
import LoadingSpinner from './Loader.gif'

const Loader = () => {
  return (
    <div className='absolute top-[50%] left-[50%]'>
      <img src={LoadingSpinner} alt="" className='bg-transparent'/>
    </div>
  )
}

export default Loader
