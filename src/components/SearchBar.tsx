import React from 'react';
import { makeStyles, Theme, createStyles,FormControl, OutlinedInput, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

interface State {
  location: string;
}

export const SearchBar = ({}) => {

  const classes = useStyles();
  const [values, setValue] = React.useState<State>({
    location: "",
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [prop]: event.target.value });
  };

  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputBase
        style={{
          border: '5px solid black'
        }}
        id="location-searchbar"
        className={classes.margin}
        defaultValue="Naked input"
        value={values.location}
        onChange={handleChange("location")}
        inputProps={{ 'aria-label': 'naked' }}
      />
    </FormControl>
  );

};