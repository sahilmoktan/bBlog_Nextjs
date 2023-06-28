import React from 'react'
import Link from 'next/link'


function LoginStudent() {
  return (
    
    <div><h1 className='heading' >This is student LogIn page</h1>

      <br/>
      <br/>
      <Link href="/">Go to Home</Link>
      <br/>
      <br/>
      <Link href="/login">Go to Login</Link>
      {/* <br/>
      <Link href="/login/loginStudent">Go to loginStudent</Link> */}
      <br/>
      <Link href="/login/loginTeacher">Go to loginTeacher</Link>
    </div>
  )
}

export default LoginStudent