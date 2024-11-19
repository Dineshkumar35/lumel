import Button from "@mui/material/Button";

const CustomButton = (props) =>{
    const { btnText, handleClick } = props;

    return (
        <Button variant="contained" onClick={handleClick}>{btnText}</Button>
    )
}

export default CustomButton;