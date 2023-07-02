import React from 'react'
import Link from 'next/link'


export default function AboutCollege() {
  return (
    
    <div> <h1 className='heading'>About College Page</h1>

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


export function generateMetadata(){
  return{
    title:"about College page title",
    description:"about College page title"
  }
}