import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const PageHeader = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" style={{backgroundColor: '#000'}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit">
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Romantic Comedy
                        </Typography>
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default PageHeader