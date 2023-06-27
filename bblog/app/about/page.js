'use client'
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'


function AboutPage() {
  const router = useRouter()

  return (
    <div>
      About Page

      <Link href="/">Go to Home</Link>
      <button onClick={()=>router.push('/')}>Go to Home Page</button>

    </div>
  )
}

export default AboutPage