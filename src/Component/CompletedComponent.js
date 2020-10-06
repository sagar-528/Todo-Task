import React from 'react'
import {Link} from 'react-router-dom'
import NavbarComponent from './NavbarComponent';
import {ButtonGroup, Grid, Typography, Checkbox} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'

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

function CompletedComponent() {

    const[todos, setTodos] = useSessionStorage("Todo",[]);

    const handleDelete = (id) => {
        const newTodos = [...todos];
        setTodos(newTodos.filter(t => t.id !== id));
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
                  <div style={{padding:'0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px' }}>
                    <Grid container justify= 'space-between' alignItems= 'center'>
                      <Grid item>
                        <Typography variant= 'h6' style={{ textDecoration: todo.done ? 'line-through red' : 'none' }}>
                          Task: {todo.val}
                        </Typography>
                      </Grid> 
                      <Grid>
                      <ButtonGroup color='primary' variant= "text">
                        <IconButton style={{ padding:'0px'}} onClick= {() => {handleDelete(todo.id)}}>
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup>
                      </Grid>
                    </Grid>
                    <Typography variant='subtitle1' style={{ textDecoration: todo.done ? 'line-through red' : 'none' }}>
                      Date: {todo.date}
                    </Typography>
                    <Typography variant='subtitle1' style={{ textDecoration: todo.done ? 'line-through red' : 'none' }}>
                      CompelteDate : {todo.currentDate}
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

export default CompletedComponent
