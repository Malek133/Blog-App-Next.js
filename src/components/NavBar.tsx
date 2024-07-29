import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="container mx-10 navbar bg-base-200">
  <div className="flex-none">
  <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    
   
    
  </div>
  <div className="flex-1">
  <Link href={'/'} className="btn btn-ghost text-xl">
   Blog</Link>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
    <Link href='/Create'>Create</Link>
    </button>
  </div>
</div>

  )
}

export default NavBar
