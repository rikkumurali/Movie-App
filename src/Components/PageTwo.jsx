import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getPageTwoDetails } from '../slice/pageTwoSlice'
import { Card, CardMedia, Typography } from '@mui/material';


const PageTwo = () => {

  const dispatch = useDispatch()

  const { movieData, title, isLoading } = useSelector(store => store.pageTwo)
  console.log("Movie data2", movieData);
  console.log("title2", title);
  console.log("loading2", isLoading);

  useEffect(() => {
    dispatch(getPageTwoDetails())
  }, [])

  return (

    <div style={{ padding: '10px 20px', background: '#000' }}>

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

              <Typography variant="body2" color="#fff" textAlign="center" fontWeight='bold' paddingTop='10px' >
                {item.name}
              </Typography>

            </Grid>

          ))
        }
      </Grid>
    </div>
  )
}

export default PageTwo