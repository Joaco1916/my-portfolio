//Nextjs
import { Box, Typography, Button, Divider } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [randomWords, setRandomWords] = useState([])
  const [randomWordsCategories, setRandomWordsCategories] = useState([])
  const [wordHistory, setWordHistory] = useState([])

  useEffect(() => {
    // Function to fetch and parse CSV data
    const fetchRandomWords = async () => {
      try {
        const response = await fetch('/docs/random_words_2.csv')
        const text = await response.text()
        const categories = text.split('\n')[0].split(',').slice(1) // Get categories from header
        const lines = text.split('\n').slice(1) // Skip header line
        const data = lines.map(line => line.split(','))

        // Get 2 random words from different categories (excluding first column which is index)
        const randomIndex1 = Math.floor(Math.random() * data.length)
        const randomIndex2 = Math.floor(Math.random() * data.length)
        
        // Categories
        const categoryIndex1 = Math.floor(Math.random() * (data[randomIndex1].length - 1)) + 1
        const categoryIndex2 = Math.floor(Math.random() * (data[randomIndex2].length - 1)) + 1
        const category1 = categories[categoryIndex1 - 1]
        const category2 = categories[categoryIndex2 - 1]

        // Get a random word from each row (excluding the index column)
        const word1 = data[randomIndex1][categoryIndex1]
        const word2 = data[randomIndex2][categoryIndex2]
        
        setRandomWords([word1, word2])
        setRandomWordsCategories([category1, category2])
      } catch (error) {
        console.error('Error fetching random words:', error)
      }
    }

    fetchRandomWords()
  }, [])

  const handleReset = async () => {
    try {
      const response = await fetch('/docs/random_words_2.csv')
      const text = await response.text()
      const categories = text.split('\n')[0].split(',').slice(1) // Get categories from header
      const lines = text.split('\n').slice(1) // Skip header line
      const data = lines.map(line => line.split(','))

      // Get 2 random words from different categories (excluding first column which is index)
      const randomIndex1 = Math.floor(Math.random() * data.length)
      const randomIndex2 = Math.floor(Math.random() * data.length)

      // Categories
      const categoryIndex1 = Math.floor(Math.random() * (data[randomIndex1].length - 1)) + 1
      const categoryIndex2 = Math.floor(Math.random() * (data[randomIndex2].length - 1)) + 1
      const category1 = categories[categoryIndex1 - 1]
      const category2 = categories[categoryIndex2 - 1]
      
      // Get a random word from each row (excluding the index column)
      const word1 = data[randomIndex1][categoryIndex1]
      const word2 = data[randomIndex2][categoryIndex2]
      
      const newWords = [word1, word2]
      setRandomWords(newWords)
      setRandomWordsCategories([category1, category2])
      
      // Add to history
      setWordHistory(prev => [newWords, ...prev]) // Keep only last 10 entries
    } catch (error) {
      console.error('Error fetching random words:', error)
    }
  }

  return (
    <Box>
        <Head>
            <title>Joaquín Rodriguez</title>
            <meta name="description" content="Gameboard de Joaquín Rodriguez" />
            <link rel="icon" href="/icon_portfolio.png"/>
        </Head>

        <Box sx={{ display:'flex', flexFlow:'column', textAlign: 'center', m: 4 }}>
            <Box sx={{ textAlign: 'center', m: 2, height: '300px' }}>
                <Typography variant="h4" gutterBottom>
                Palabras Aleatorias
                </Typography>
                {randomWords.length > 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, height: '150px' }}>
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="h6" sx={{ bgcolor: 'primary.light', p: 2, borderRadius: 1 }}>
                        {randomWords[0]}
                        </Typography>
                        <Typography variant="body1" sx={{ p: 2, borderRadius: 1 }}>
                        {randomWordsCategories[0]}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="h6" sx={{ bgcolor: 'secondary.light', p: 2, borderRadius: 1 }}>
                        {randomWords[1]}
                        </Typography>
                        <Typography variant="body1" sx={{ p: 2, borderRadius: 1 }}>
                        {randomWordsCategories[1]}
                        </Typography>
                    </Box>
                </Box>
                ) : (
                <Typography variant="body1">Cargando palabras...</Typography>
                )}
                
                <Box sx={{ m: 2 }}>
                    <Button variant="contained" onClick={handleReset}>
                        Nuevas Palabras
                    </Button>
                </Box>
            </Box>
            <Divider sx={{ m: 2 }}/>
            <Box sx={{ textAlign: 'center', m: 2 }}>
                {wordHistory.length > 0 && (
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Historial de Palabras
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {wordHistory.length} pares
                    </Typography>
                    <Box sx={{ maxHeight: '300px', overflow: 'auto' }}>
                        {wordHistory.map((pair, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, m: 1 }}>
                                <Typography variant="body1" sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 1 }}>
                                {pair[0]}
                                </Typography>
                                <Typography variant="body1" sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 1 }}>
                                {pair[1]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                )}
            </Box>
        </Box>
    </Box>
  )
}
