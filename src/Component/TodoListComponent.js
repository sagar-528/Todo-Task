import React from 'react'
import {ButtonGroup, Grid, Paper, Typography, FormControlLabel, Checkbox} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListComponent(props) {

  const getCurrentDate = () => {
        const now = new Date();
        return now.toISOString().slice(0, 10)
    }


return (
    <Grid container direction= 'column' spacing={2} style={{ marginTop: '1.1rem'}}>
    { props.todos.map(todo => {
      return (
        <Grid item key={todo.id} >
          <div style={ getCurrentDate() > todo.date ? 
            {backgroundColor: 'white', padding: '0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px' } 
          : {backgroundColor : 'grey', opacity: '0.6', padding: '0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px' }}>
            <Grid container justify= 'space-between' alignItems= 'center'>
              <Grid item>
                <Typography variant= 'h6'>
                  Task: {todo.val}
                </Typography>
              </Grid> 
              <Grid>
              <ButtonGroup color='primary' variant= "text">
                <IconButton style={{ padding:'0px'}}  onClick= {() => {props.handleDelete(todo.id)}}>
                  <DeleteIcon />
                </IconButton>
                { todo.done ?
                  <Checkbox disabled checked /> 
                :
                  <Checkbox disabled color="primary"/>
                }
              </ButtonGroup>
              </Grid>
            </Grid>
            <Typography variant='subtitle1'>
              Date: {todo.date}
            </Typography>
          </div>
        </Grid>
        )}
      )}
    </Grid> 
  )
}

export default TodoListComponent

