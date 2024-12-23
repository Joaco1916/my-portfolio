import { Box,  Button,  Grid, Switch, Typography } from "@mui/material"
import RoundedPicture from "./RoundedPicture"
import styles from '../../../styles/RoundedPicture.module.css'
import { useEffect, useState } from "react";
import { alpha, styled } from '@mui/material/styles';
import Image from "next/image";
import { colorPalette } from "../../utils/color-palette";
import FrostedGlass from "../Basics/FrostedGlass";

const glassStyles = {
    root: {
        filter: 'blur(8px)',
    },
 };

const BlindableSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: colorPalette.stormi.darkest,
        '&:hover': {
            backgroundColor: alpha(colorPalette.stormi.darkest, theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: colorPalette.stormi.darkest,
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
                    background: `linear-gradient(90deg, ${colorPalette.stormi.darkest} 20%, ${colorPalette.stormi.darker} 40%, ${colorPalette.stormi.normal} 60%, ${colorPalette.stormi.lighter} 80%, ${colorPalette.stormi.lightest} 90%)`,
                    // add background image from public folder
                    backgroundImage: 'url(/dark-background-7680x4320-8324.png)',
                    height: '100%',
                    display: 'flex',
                    padding: 4,
                    borderRadius: 8,
                    justifyContent: 'space-between'
                }}
            >
              <FrostedGlass>
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
                                                background: language === lang ? colorPalette.stormi.lightest : 'white',
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
              </FrostedGlass>
            </Box>
        </Grid>
    )
}

export default TopBanner