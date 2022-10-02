import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getPageThreeDetails } from '../slice/pageThreeSlice'
import { Card, CardMedia, Typography } from '@mui/material';


const PageThree = () => {

  const dispatch = useDispatch()

  const { movieData, title, isLoading } = useSelector(store => store.pageThree)
  console.log("Movie data3", movieData);
  console.log("title3", title);
  console.log("loading3", isLoading);

  useEffect(() => {
    dispatch(getPageThreeDetails())
  }, [])


  return (

    <div style={{ padding: '10px 20px', background: '#000' }} >

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

export default PageThree