//Nextjs
import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'

//Custom
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import HomeLayout from '../src/components/Layouts/HomeLayout'
import styles from '../styles/Landing.module.css'
import HobbiesLayout from '@/layouts/HobbiesLayout'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Joaquín Rodriguez</title>
        <meta name="description" content="Portfolio de Joaquín Rodriguez" />
        <link rel="icon" href="/icon_portfolio.png"/>
      </Head>

      <HobbiesLayout />

    </Box>
  )
}
