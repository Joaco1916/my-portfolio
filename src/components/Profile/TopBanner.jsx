import { Box, FormControlLabel, FormGroup, Grid, Switch, ToggleButton, Typography } from "@mui/material"
import RoundedPicture from "./RoundedPicture"
import styles from '../../../styles/RoundedPicture.module.css'
import { useEffect, useState } from "react";
import { FormatAlignJustify } from "@mui/icons-material";
import { alpha, styled } from '@mui/material/styles';
import Image from "next/image";

const glassStyles = {
    root: {
        filter: 'blur(8px)',
    },
 };

const BlindableSwitch = styled(Switch)(({ theme }) => ({
    //marginBottom: 8,
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

const TopBanner = () => {

    const [ blind, setBlind ] = useState(false);
    const [ blindable, setBlindable ] = useState(true);

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
                            <Grid item xs={12} sm={6} alignSelf={'center'}>
                                <Typography className={styles.homelogo} ml={2}>Joaquín Rodriguez</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
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
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopBanner