import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';


import { Button } from '@mui/material';
import useTable from '../../hooks/use-table';


export interface Item {
    id?: string;
    name: string;
    measurement_units: string;
    code: string;

}

export default function Table() {
    const {items, handleChangeItem} = useTable()
    
    if (!items) return null
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650, marginTop: '40px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Единица измерения</TableCell>
                        <TableCell align="right">Артикул/код</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow
                            key={item.code + Math.random()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.measurement_units || 'Единицы не указаны'}</TableCell>
                            <TableCell align="right">{item.code || 'Код не указан'}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => handleChangeItem(item)}>
                                    <CreateIcon sx={{ color: 'black' }} />
                                </Button>
                            </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    )
}
