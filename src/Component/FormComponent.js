import React from 'react'
import { Grid, TextField } from '@material-ui/core';

function FormComponent({formik}) {

    return (
        <Grid container direction= "column" spacing={2}>
                <Grid item>
                    <TextField label= "TASK" variant= "outlined"
                    name= "todoText" onChange={formik.handleChange}
                    value={formik.values.todoText}/>
                </Grid>
                <Grid item>
                    <TextField label= 'DATE' type= 'date' variant= 'outlined' 
                     style={{ width: '100%'}} InputLabelProps={{
                        shrink: true,
                      }} name= 'taskDate' onChange={formik.handleChange}
                      value={formik.values.taskDate}/>
                </Grid>
            </Grid>
    )
}

export default FormComponent
