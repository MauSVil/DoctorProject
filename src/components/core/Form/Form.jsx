import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {Link} from '@reach/router'

const styles={
    form:{
        backgroundColor: 'rgba(255, 255, 255, 0.76)',
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    textField: {
        width: 300,
    },
    formButton:{
        width: '100%',
    }
}

function Form(props) {
    const {classes} = props
    return (
        <form className={classes.form}>
            <FormControl>
                <TextField
                    id="standard-name"
                    label="Nombre"
                    className={classes.textField}
                    // onChange={handleChange('name')}
                    margin="normal"
                    />
                <TextField
                    id="standard-name"
                    label="Apellido"
                    className={classes.textField}
                    // onChange={handleChange('name')}
                    margin="normal"
                    />
            </FormControl>
            <TextField
                id="standard-name"
                label="Especialista"
                className={classes.textField}
                // onChange={handleChange('name')}
                margin="normal"
            />
            <Link to="/doctors">
                <Button variant="contained" className={classes.formButton}>Enviar</Button>
            </Link>
        </form>
    );
  }

export default withStyles(styles)(Form);
