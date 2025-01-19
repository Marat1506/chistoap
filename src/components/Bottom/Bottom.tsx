import { Box, Pagination, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './Bottom.module.css'
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-types";
import { changeCurrentPage, changeCurrentPageSize } from "../../store/reducer";
import { ChangeEvent } from "react";


export default function Bottom() {
    const currentPage = useAppSelector(state => state.chistoap.currentPage)
    const currentPageSize = useAppSelector(state => state.chistoap.currentPageSize)
    const dispatch = useAppDispatch()

    const handleChangeCurrentPageSize = (event: SelectChangeEvent) => {
        const newPageSize = Number(event.target.value); 
        dispatch(changeCurrentPageSize({ currentPageSize: newPageSize }));
    };

    const handleChangeCurrentPage = (event: ChangeEvent<unknown>, page: number) => {
        console.log("ev = ", event)
        dispatch(changeCurrentPage({currentPage: page}))
    }

    return (
        <Box className={styles.container}>
            <Pagination count={10} shape="rounded"
            page={currentPage}
            onChange={handleChangeCurrentPage}
             />

            <Box className={styles.label}>
                <Typography variant="body1" component="label" htmlFor="demo-simple-select" sx={{ mb: 1, display: 'block' }}>
                    Показывать по:
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Количество</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={String(currentPageSize)}
                        label="Age"
                        onChange={handleChangeCurrentPageSize}
                        sx={{
                            backgroundColor: 'rgba(81, 74, 74, 1)', 
                            color: 'white', 
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white', 
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(81, 74, 74, 1)', 
                            },
                            '.MuiSvgIcon-root': {
                                color: 'white', 
                            },
                        }}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </Box>




        </Box>
    )
}
