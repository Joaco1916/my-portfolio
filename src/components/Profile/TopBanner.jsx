import { Box,  Button,  Grid, Switch, Typography } from "@mui/material"
import RoundedPicture from "./RoundedPicture"
import styles from '../../../styles/RoundedPicture.module.css'
import { useEffect, useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import Image from "next/image";

const glassStyles = {
    root: {
        filter: 'blur(8px)',
    },
 };

const BlindableSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#13547a',
        '&:hover': {
        backgroundColor: alpha('#13547a', theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#13547a',
    },
}));

const TopBanner = ({
    language,
    handleLanguageChange
}) => {

    const [ blind, setBlind ] = useState(false);
    const [ blindable, setBlindable ] = useState(true);
    const languages = ['es', 'en'];	

    useEffect(() => {
        if(blind){
            const intervalBlind = setInterval(() => {
                setBlind(false)
            }, 250);
            return () => clearInterval(intervalBlind);
        } else {
            const intervalNotBlind = setInterval(() => {
                setBlind(true)
            }, 5000);
            return () => clearInterval(intervalNotBlind);
        }
    }, [blind]);

    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    background: 'linear-gradient(90deg, #13547a 60%, #80d0c7 90%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: 4,
                    borderRadius: 8,
                    justifyContent: 'space-between'
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box style={ (blind && blindable) ? glassStyles.root : null }>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <RoundedPicture/>
                                </Grid>
                                <Grid 
                                    item xs={12} 
                                    sm={6} 
                                    alignSelf={'center'}
                                >
                                    <Typography
                                        mt={2}
                                        fontFamily="Panton"
                                        fontWeight="bold"
                                        fontStyle={'normal'}
                                        fontSize={50}
                                        lineHeight={1}
                                    >Joaquín</Typography>
                                    <Typography
                                        fontFamily="Panton"
                                        fontWeight="normal"
                                        fontStyle={'normal'}
                                        fontSize={50}
                                        lineHeight={1}
                                    >Rodriguez</Typography>
                                    <Typography
                                        fontFamily="Panton"
                                        fontWeight="normal"
                                        fontStyle={'italic'}
                                        fontSize={20}
                                    >Full-stack developer</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: {xs:'inline-flex', md:'flex'},
                                flexDirection: {xs:'row', md:'column'},
                                alignItems: 'flex-end',
                                my: 2,
                                width: { 
                                    xs: '100%',
                                    sm: 200,
                                    md: '100%', 
                                },
                            }}
                        >
                            <Box
                                className={ styles.flowingHighlight }
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    borderRadius: 8,
                                    background: 'white',
                                    width: 150,
                                    height: 50,
                                }}
                            >
                                <BlindableSwitch checked={!blindable} onChange={() => setBlindable(!blindable)}/>
                                <Image
                                    src="/svg/noun-glasses-2.svg"
                                    alt="Picture of the author"
                                    width={48}
                                    height={24}
                                    objectFit="cover"
                                />
                            </Box>             
                        </Box>
                        <Box
                            sx={{
                                display: {xs:'inline-flex', md:'flex'},
                                flexDirection: {xs:'row', md:'column'},
                                alignItems: 'flex-end',
                                my: 2,
                                width: { 
                                    xs: '100%',
                                    sm: 200,
                                    md: '100%', 
                                },
                            }}
                        >
                            <Box
                                className={ styles.flowingHighlight }
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    borderRadius: 8,
                                    background: 'white',
                                    width: 150,
                                    height: 50,
                                }}
                            >
                                {
                                    languages.map( (lang, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => handleLanguageChange(lang)}
                                            sx={{
                                                borderRadius: 8,
                                            }}
                                        >
                                            <Image
                                                width={20}
                                                height={20}
                                                src={`/languages/language_${lang}.png`}
                                                alt=""
                                                priority
                                            />
                                        </Button>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default TopBanner