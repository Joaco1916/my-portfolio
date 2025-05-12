// External
import Box from '@mui/material/Box';
import Head from 'next/head';

// Internal
import HomeLayout from '@/components/Layouts/HomeLayoutV2';

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
