import React from 'react'
import { Grid, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


function HeaderComponent(props) {

 
    return (
        <Grid container justify= 'space-between' style={{marginTop:'2rem'}} alignItems= 'center'>    
        <Grid item>
            <Typography variant= 'h3'>
                    TODO
            </Typography>
    
            </Grid>
            <Grid item>
                <Fab size= 'medium' color='primary' onClick={props.handleFabClick}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

export default HeaderComponent
