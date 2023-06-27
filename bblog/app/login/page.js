'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


function LoginPage() {
  const router = useRouter()

  return (
    <div>Login Page

      <Link href="/">Go to Home</Link>
      <button onClick={()=>router.push('/')}>Go to Home Page</button>
    </div>
  )
}

export default LoginPage