import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CustomTextBox from "./TextBox";
import CustomButton from "./Button";

const CustomTableRow = (props) =>{
    const { row,handleClick,handleChange,category } = props;
    return(
        <TableRow
        key={row?.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {`${row?.label}`}
            </TableCell>
            <TableCell align="right">{row?.value}</TableCell>
            <TableCell align="right"><CustomTextBox value={row?.customValue} name={row?.label} handleChange={(e)=>handleChange(e,row,category)}/></TableCell>
            <TableCell align="right"><CustomButton btnText={"Add"} handleClick={()=>handleClick('percetage')}/></TableCell>
            <TableCell align="right"><CustomButton btnText={"Add"} handleClick={()=>handleClick("value")}/></TableCell>    
            <TableCell align="right">{row?.value}</TableCell>
        </TableRow>
    )
}

export default CustomTableRow;