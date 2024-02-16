import React from 'react'

const  NavBar= () => {
  return (
    <nav className='flex justify-between bg-blue-500 text-white py-4'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>TaskCheck</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        <li></li>

      </ul>
    </nav>  

  )
}

export default NavBar 
