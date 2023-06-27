import React from 'react'
import Link from 'next/link'


function AboutCollege() {
  return (
    
    <div>About College Page

      <br/>
      <br/>
      <Link href="/">Go to Home</Link>
      <br/>
      <br/>
      <Link href="/about">Go to about</Link>
      <br/>
      <Link href="/about/aboutStudent">Go to aboutStudent</Link>
    </div>
  )
}

export default AboutCollege