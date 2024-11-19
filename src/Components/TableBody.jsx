import { useState } from "react";
import { tableList } from "../api/table";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTableRow from "./TableRow";

const CustomTableBody = () => {
    const { rows } = tableList; 
    const [data,setData] = useState(rows);
    
    const handleClick = () =>{

    }

    const handleChange = (e,row,category) =>{
        const updRow = {...row,customValue:e.target.value}
        const currentCatergory = data.find((item)=>item.label === category);
        currentCatergory.children = [...currentCatergory.children,updRow]
        console.log(currentCatergory);
    }

          return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Input</TableCell>
                    <TableCell align="right">Allocation %</TableCell>
                    <TableCell align="right">Allocation Val</TableCell>
                    <TableCell align="right">Varience %</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <>
                    <CustomTableRow row={row} handleClick={handleClick} handleChange={handleChange}/>
                    {row?.children.map((item)=>(
                        <CustomTableRow row={item} category={row.label} handleClick={handleClick} handleChange={handleChange}/>
                    ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
}

export default CustomTableBody;