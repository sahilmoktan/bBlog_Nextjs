'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function LoginPage() {
  const router = useRouter()

  return (
    <div><h2 className='heading'>College Login Page</h2>
      <br/>
      <br/>

      <Link href="/">Go to Home</Link>
      <br/>
      <button onClick={()=>router.push('/')}>Go to Home Page</button>
      <br/>
      <br/>
      <Link href="/login/loginStudent">Go to loginStudent</Link>
      <br/>
      <Link href="/login/loginTeacher">Go to loginTeacher</Link>
    </div>
  )
}


