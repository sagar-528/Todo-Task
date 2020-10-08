import React, {useState} from 'react'
import {ButtonGroup, Grid, Typography, Checkbox} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
import NavbarComponent from './NavbarComponent'
import '../index.css'

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


function ActiveComponent() {
    
    const[todos, setTodos] = useSessionStorage("Todo",[]);
    const [isShown, setIsShown] = useState(false);

    const handleDelete = (id) => {
        const newTodos = [...todos];
        setTodos(newTodos.filter(t => t.id !== id));
        console.log(newTodos,"deleting task");
     }

    const handleMarkDone = (todo) =>{
      const newTodos = [...todos];
      const t = newTodos.find(t => t.id === todo.id);
      t.done = !t.done;
      setTodos(newTodos);
      console.log(newTodos,"task complete");
    }
    
    const getCurrentDate = () => {
      const now = new Date();
      return now.toISOString().slice(0, 10)
   }

    return (
        <div>
          <NavbarComponent todos={todos}/>
            <CssBaseline />  
        { todos.map(todo => {
            return (  
            <Container key={todo.id} style= { getCurrentDate() < todo.date ? { display: 'none' } : { display: 'block' }}
              onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>   
              <Grid container direction= 'column' spacing={2} style= { todo.done ? { display: 'none' } : { display: 'block', marginTop: '1.1rem' }}>
                <Grid item >
                  <div style={{ padding:'0.8rem', border: '2px solid #f0f0f0', borderRadius: '5px' }}>
                    <Grid container justify= 'space-between' alignItems= 'center'>
                      <Grid item>
                        <Typography variant= 'h6' >
                          Task: {todo.val}
                        </Typography>
                      </Grid> 
                      <Grid>
                      {isShown && (
                        <ButtonGroup color='primary' variant= "text">
                          <IconButton style={{ padding:'0px'}} onClick= {() => {handleDelete(todo.id)}}>
                            <DeleteIcon />
                          </IconButton>
                            <Checkbox onClick ={() => {handleMarkDone(todo)}} color="primary" />
                        </ButtonGroup>
                      )}
                      </Grid>
                    </Grid>
                    <Typography variant='subtitle1' >
                      Date: {todo.date}
                    </Typography>
                  </div>
                </Grid>
                </Grid> 
                </Container>
                )
            })}
        </div>
    )
}

export default ActiveComponent
