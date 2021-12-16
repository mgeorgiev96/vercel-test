import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import mongoose from 'mongoose'

export default function Home() {
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
      </div>
    </>
  )
}


export async function getStaticProps () {

  await mongoose.connect(process.env.MONGO_DB).then(()=>console.log('connected')).catch(err=>console.log(err))
  return {
    props:{
      mongo:"connected"
    }
  }
}