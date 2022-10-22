import { Box, Grid } from "@mui/material"

const HomeLayout = () => {

    const arqui = [
        {
            id: 'photo',
            xs: 4,
            border: '2px solid red',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit quibusdam voluptatem. Atque, vitae! Nihil accusantium vitae deleniti facere ullam?'
        },
        {
            id: 'description',
            xs: 8,
            border: '2px solid red',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit quibusdam voluptatem. Atque, vitae! Nihil accusantium vitae deleniti facere ullam?'
        },
        {
            id: 'personal',
            xs: 4,
            border: '2px solid red',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit quibusdam voluptatem. Atque, vitae! Nihil accusantium vitae deleniti facere ullam?'
        },
        {
            id: 'history',
            xs: 8,
            border: '2px solid red',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit quibusdam voluptatem. Atque, vitae! Nihil accusantium vitae deleniti facere ullam?'
        },
    ]

    return(
        <Grid container spacing={2}>
            { arqui.map(( block ) => (
                    <Grid key={block.id} item xs={block.xs} 
                        sx={{
                            border:block.border
                        }}
                    >
                        <h3>{block.id}</h3>
                        <p>{block.text}</p>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default HomeLayout