import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField type="number" 
      InputProps={{
          inputProps: {
              max: 100, min: 0
          }
      }}
          id="standard-basic" label="Cost" variant="standard" /> 
       
    </Box>
  );
}
