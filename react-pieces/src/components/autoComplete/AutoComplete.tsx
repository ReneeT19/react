import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
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

  interface inputData {
    label: string;
    year: number | null;
  }

  const [input, setInput] = useState<inputData | null>();
  const label = input?.label;
  const year = input?.year;
  console.log(label + " " + year);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    setInput(value);
  }

  return (
    <>
    <h3>Demo of Autocomplete from MUI material</h3>
    {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => `${option.label}: ${option.year}`}
      renderOption = {(props: any, option: any) => {
        return <li {...props}>{`${option.label}: ${option.year}`}</li>;
        }
      }
      sx={{ width: 300 }}
      popupIcon={<KeyboardArrowDown />}
      onChange={handleChange}
      renderInput={(params) => (<TextField {...params} label="Movie" />)}
    /> */}
    <Autocomplete
        // multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.label}
        // defaultValue={[top100Films[1]]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    <p>The name is {label} and the year is {year} </p>
    </>
  )
}

export default AutoComplete;