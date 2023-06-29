'use client'
// import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


function AboutStudent() {
  const [h3style, setH3styel] = useState({backgroundColor:'green'})
  return (
    <div>
        <h2 className='heading' style={{color:'skyblue'}}>About Student Page</h2>
        <h3 style={h3style}>head 3</h3>
        <button onClick={()=> setH3styel({backgroundColor:'red'})}> update style</button>
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