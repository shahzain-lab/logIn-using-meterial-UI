import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  paper: {
    height: 500,
    textAlign:"center",
    background:"#f6f6f6",
    padding: 20,
    margin: "0 auto",
    width: 400,
    marginTop: 30
  },
  textFeild: {
    width: 400
  },
  hTwo:{
    display: "flex",
  justifyContent:"start"
},
padd1: {
  display: "flex",
  justifyContent: "space-around",
  padding: '20 20'
},

}));


export default function SimplePaper() {
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    
    checkedG: true
  })

  return (
    <div className={classes.root}>
      
      <Paper elevation={4} className={classes.paper}>
        <h1>Login-In</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"className={classes.textFeild}  label="UserName" />
      <TextField id="standard-basic"className={classes.textFeild} type="password" label="Password" />
    </form>
    <h2 className={classes.hTwo}>Gender</h2>
    {/* /?// */}
    <FormGroup row className= {classes.padd1}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="male"
      />
       <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="fe-male"
         
         />
     
    </FormGroup>
    <h3 className={classes.hTwo}>Comments</h3>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" className={classes.textFeild}/>
</form>
    
      </Paper>
      
    </div>
  );
}
