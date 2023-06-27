// import React from 'react'
import Link from 'next/link'


function AboutStudent() {
  return (
    <div>
        About Student Page
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