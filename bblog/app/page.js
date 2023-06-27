'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [name,setName]=useState()
  const apple=(item)=>{
    setName('moktan')
    alert(item)
  }

  const router = useRouter()

  return (
    <main className={styles.main}>
      <h1>Home page {name}</h1>
      <button onClick={()=>apple('color')}>clickme</button>
      <Link href="/login">Go to login</Link>
      <Link href="/about">Go to about</Link>
      <button onClick={()=>router.push('/login')}>Go to login Page</button>
    </main>
  )
}
