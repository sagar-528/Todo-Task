import React from 'react'
import TodoListComponent from './TodoListComponent'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
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

 const handleMarkDone = (todo) =>{
   const newTodos = [...todos];
   const t = newTodos.find(t => t.id === todo.id);
   t.done = !t.done;
   setTodos(newTodos);
   console.log(newTodos);
 }

    return (
        <div>    
         <NavbarComponent todos={todos}/>
            <CssBaseline />
            <Container>
            <TodoListComponent todos={todos}  handleDelete={handleDelete} handleMarkDone={handleMarkDone}/>
        </Container>
        </div>
    )
}

export default ExhaustedComponent
