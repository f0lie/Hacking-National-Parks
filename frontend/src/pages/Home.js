import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { setLocation } from '../app/matchSlice'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom";

const Home = () => {
    const [location, setStateLocation] = useState('');
    const onLocationChange = e => setStateLocation(e.target.value);
    const dispatch = useDispatch();

    const changeLocation = (location) => {
        dispatch(setLocation(location));
    }

    const handleClick = e => {
        changeLocation(location);
        console.log('location: ' + location)
    }

  return (
      <div>
          <h1>Find a National Park</h1>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="standard-basic" label="Select a State" variant="standard" value={location} onChange={onLocationChange} required /> 
            <Link to="/results"><Button variant="dark" onClick={handleClick}>Submit</Button></Link>
        </Box>
    </div>
  );
}
export default Home;
