'use client'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight:"100",
  subsets:['cyrillic'],
  display:'swap'
})

export default function Home() {


  return (
    <main className="maindiv">
      <h1 className={roboto.className}>Welcome toHome page</h1>
      <Link href="/login">Go to login</Link>
      <Link href="/register">Go to Register page</Link>
      
      <Image
      src="https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
      width={500}
      height={500}
      alt='mount'
      />
    </main>
  )
}
