// External
import { Box } from '@mui/material';
import Head from 'next/head';

// Internal
import HomeLayout from '@/layouts/HomeLayout';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Joaquín Rodriguez</title>
        <meta name="description" content="Portfolio de Joaquín Rodriguez" />
        <link rel="icon" href="/icon_portfolio.png" />
      </Head>
      <HomeLayout />
    </Box>
  );
}
