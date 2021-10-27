
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codelandia</title>
        <meta name="description" content="codelandia" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header/>
    </div>
  )
}

export default Home;
