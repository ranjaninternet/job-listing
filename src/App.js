import logo from './logo.svg';
import './App.css';
import React from "react";

//material ui
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Signup from './signup';
import Login from './login';
import Switch from '@mui/material/Switch';
function App() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className="App">
     <Paper elevation={3}  style ={{padding:"10px"}}>

      {checked ? (
     <Chip icon={<FaceIcon />} label="sign up" variant="outlined" />
      ) : (
    
    <Chip icon={<LockIcon />} label="login" variant="outlined" />
      )}
      

    <Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>

{checked ? <Signup /> : <Login />}
</Paper>
    </div>

 

  );
}

export default App;
