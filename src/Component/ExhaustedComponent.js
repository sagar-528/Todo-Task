import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {ButtonGroup, Grid, Typography, Container} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import NavbarComponent from './NavbarComponent';

function useSessionStorage(key, defaultValue = '') 
{
  const [state, setState] = React.useState(
     () => JSON.parse(window.sessionStorage.getItem(key)) || 
     defaultValue,
  )

  React.useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

function ExhaustedComponent() {

    const[todos, setTodos] = useSessionStorage("Todo",[]);

 const handleDelete = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t => t.id !== id));
 }

 
 const getCurrentDate = () => {
   const now = new Date();
   return now.toISOString().slice(0, 10)
}

    return (
        <div>    
         <NavbarComponent todos={todos}/>
            <CssBaseline />
            <Container>
            <Grid container direction= 'column' spacing={2} style={{ marginTop: '1.1rem'}}>
    { todos.map(todo => {
      return (
        <Grid item key={todo.id}>
          <div style={ getCurrentDate() > todo.date ? 
            {backgroundColor: 'white', padding: '0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px', display: 'none' } 
          : {backgroundColor : 'grey', opacity: '0.6', padding: '0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px', display: 'block' }}>
            <Grid container justify= 'space-between' alignItems= 'center'>
              <Grid item>
                <Typography variant= 'h6'>
                  Task: {todo.val}
                </Typography>
              </Grid> 
              <Grid>
              <ButtonGroup color='primary' variant= "text">
                <IconButton style={{ padding:'0px'}}  onClick= {() => {handleDelete(todo.id)}}>
                  <DeleteIcon />
                </IconButton>
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
    </Container>
        </div>
    )
}

export default ExhaustedComponent
