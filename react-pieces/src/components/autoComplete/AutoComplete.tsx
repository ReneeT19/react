import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import React from 'react'
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

const AutoComplete = () => {
  return (
    <>
    <h2>Demo of Autocomplete from MUI material</h2>
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      popupIcon={<KeyboardArrowDown />}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </>
  )
}

export default AutoComplete