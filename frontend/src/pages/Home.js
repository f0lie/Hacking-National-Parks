import { TextField } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'
import TextFields from '../components/TextField'
import Button from '@mui/material/Button';
function Home() {
    return (
        <div className='name'>
            <h1>Find a National Park</h1>
            <SearchBar />
            <TextFields />
            <Button variant="dark">Submit</Button> 
        </div>
    );
}

export default Home;