import React from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';
import FormComponent from './FormComponent';


function FormDailogComponent(props) {

    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth: '60%vw'}}>
            <DialogTitle>
                Add Todo
            </DialogTitle>
            <DialogContent>
                <FormComponent formik= {props.formik} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button color= 'primary' onClick={props.handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDailogComponent
