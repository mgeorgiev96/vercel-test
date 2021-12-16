import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useSession,signIn,signOut} from 'next-auth/react'

export default function Home() {
  const {data:session} = useSession()
  console.log(session ? session.user.email : "marks")
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content='ninjas'></meta>
      </Head>
      <div className={styles}>
        <h1 className={styles.title}>Hello Home page</h1>
        <p className={styles.text}>lorem123123123</p>
        <p className={styles.text}>lorem</p>
        <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        {
          session ? <p>{session.user.email}<button onClick={()=>signOut()} className={styles.btn} style={{cursor:'pointer'}}>Logout</button></p>  : <button onClick={()=>signIn()} className={styles.btn} style={{cursor:'pointer'}}>Login</button>
        }
      </div>
    </>
  )
}


export function getStaticProps () {
  return {
    props:{
      mongo:"connected"
    }
  }
}