//Material UI
import { Box } from '@mui/material'

//Nextjs
import Head from 'next/head'
import Image from 'next/image'

//Custom
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import HomeLayout from '../src/components/Layouts/HomeLayout'
import styles from '../styles/Landing.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joaquín Rodriguez</title>
        <meta name="description" content="Portfolio de Joaquín Rodriguez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <Box>
        <HomeLayout />
      </Box>

      <Footer/>
    </div>
  )
}
