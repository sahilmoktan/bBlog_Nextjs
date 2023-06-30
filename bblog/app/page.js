'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import profile from '../public/vercel.svg'

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
      <Image
      src={profile}/>
      <Image
      src="https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
      width={500}
      height={500}
      />
    </main>
  )
}
