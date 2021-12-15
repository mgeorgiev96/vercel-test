import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import mongoose from 'mongoose'

export default function Home() {
  console.log(process.env.MONGO_DB,process.env.NEXT_PUBLIC_MARTIN)
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
  console.log(process.env.MONGO_DB,process.env.MY_APP)
  console.log("martin")
  await mongoose.connect(process.env.MONGO_DB).then(()=>console.log('connected'))
  return {
    props:{
      mongo:"connected"
    }
  }
}