'use client'
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'


function AboutPage() {
  const router = useRouter()

  return (
    <div>
      About Page

      <br/>
      <br/>
      <Link href="/">Go to Home</Link>
      <br/>
      <button onClick={()=>router.push('/')}>Go to Home Page</button>
      <br/>
      <br/>
      <Link href="/about/aboutStudent">Go to aboutStudent</Link>
      <br/>
      <Link href="/about/aboutCollege">Go to aboutCollege</Link>

    </div>
  )
}

export default AboutPage