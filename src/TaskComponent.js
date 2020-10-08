import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoListComponent from './Component/TodoListComponent'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderComponent from './Component/HeaderComponent';
import FormDailogComponent from './Component/FormDailogComponent';
import { useFormik } from 'formik';
import NavbarComponent from './Component/NavbarComponent';

// Custom Hook for Session Storage 
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

function TaskComponent() {

  const[todos, setTodos] = useSessionStorage("Todo",[]);
  const [isDailogOpen, setIsDailogOpen] = useState(false);
 
  
  const handleDailogOpen = () => {
    setIsDailogOpen(true);
  }


  const handleDailogClose = () => {
    setIsDailogOpen(false);
  }

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10)
}

const formik = useFormik({
  initialValues: {
    todoText: '',
    taskDate: "2020-05-24",
    currentDate: getCurrentDate(),
    done: ''
  },
});

  const handleSubmit = (e) => {
    const {todoText, taskDate} = formik.values;
    setTodos([...todos, { val: todoText, date: taskDate, id: uuidv4(), currentDate: getCurrentDate() }]);
    setIsDailogOpen(false); 
    formik.values.todoText = '';
    formik.values.taskDate = "2020-05-24";
  }

  console.log(formik.values);

  const handleDelete = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t => t.id !== id));
  }

  return (
    <div>
    <NavbarComponent todos={todos}/> 
    <CssBaseline />
    <Container>
      <HeaderComponent handleFabClick={handleDailogOpen} />
      <TodoListComponent todos= {todos} handleDelete={handleDelete}  />
    </Container>
    <FormDailogComponent 
    open= {isDailogOpen}
    handleClose= {handleDailogClose}
    handleSubmit= {handleSubmit}
    formik= {formik}
    />
    </div>
  )
}

export default TaskComponent
