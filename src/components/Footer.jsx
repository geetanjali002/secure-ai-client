import React from 'react'
import footer from '../../public/assets/footer.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='flex bg-slate-900 justify-center items-center gap-10 lg:gap-20'>
      <div>
        <img src={footer} className='w-[200px] lg:w-[300px]' />
      </div>
      <div>
        <p onClick={()=> navigate('/team')}  className='cursor-pointer text-white text-xs lg:text-lg hover:underline'>Our Team</p>
        <p onClick={()=> navigate('/about')} className='cursor-pointer text-white text-xs lg:text-lg hover:underline'>AboutUs</p>
      </div>
      
    </div>
  )
}

export default Footer
