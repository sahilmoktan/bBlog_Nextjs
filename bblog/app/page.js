'use client'
import Link from 'next/link'
import React from 'react'

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>

      <Link href="/login">Go to login</Link>

      <br/>
      <Link href="/register">Go to register</Link>






    </div>
  )
}

export default Homepage