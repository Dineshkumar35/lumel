import TextField from "@mui/material/TextField";

const CustomTextBox = (props) => {
   const {handleChange,value,name} = props;
    return (
        <TextField
          onChange={handleChange}
          value={value}
          name={name}
        />
    )
}

export default CustomTextBox;