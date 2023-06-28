// import React from 'react'
import Link from 'next/link'


function AboutStudent() {
  return (
    <div>
        <h2 className='heading'>About Student Page</h2>
      <br/>
      <br/>
      <Link href="/">Go to Home</Link>
      <br/>
      <br/>
      <Link href="/about">Go to about</Link>
      <br/>
      <Link href="/about/aboutCollege">Go to aboutCollege</Link>

    </div>
  )
}

export default AboutStudent