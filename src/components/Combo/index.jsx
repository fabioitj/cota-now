import { Autocomplete, TextField } from "@mui/material";
import "./style.scss";

function Combo({options, label, value, setValue}) {
    return (
      <Autocomplete
      value={value && value.label}
      onChange={(event, newValue) => {
        setValue(newValue != null ? newValue : {});
      }}
      id="controllable-states-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label="Moeda" />}
    />
    );
}

export default Combo;