'use client'
import styles from './page.module.css'

export default function Home() {
  const apple=()=>{
    alert('frut')
  }
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <button onClick={apple}>clickme</button>
    </main>
  )
}
