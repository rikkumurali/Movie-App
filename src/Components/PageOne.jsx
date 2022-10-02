import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageOneDetails } from '../slice/pageOneSlice'
import { Card, CardMedia, Typography } from '@mui/material';

const PageOne = () => {

    const dispatch = useDispatch()

    const { movieData, title, isLoading } = useSelector(store => store.pageOne)
    console.log("Movie data1", movieData);
    console.log("title1", title);
    console.log("loading1", isLoading);

    useEffect(() => {
        dispatch(getPageOneDetails())
    }, [])


    return (
        <div style={{ padding: '10px 20px', marginTop: '50px', background: '#000' }}>
            <Grid container spacing={2}>
                {
                    movieData.map((item, key) => (
                        <Grid item key={key} xs={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={`./${item.posterimage}`}
                                    alt="Movie Poster"
                                />
                            </Card>
                            <Typography variant="body2" color="#fff" textAlign="center" fontWeight='bold' paddingTop='10px'>
                                {item.name}
                            </Typography>

                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default PageOne