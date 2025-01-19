import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Search from "../Search/Search"
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-types";
import { toggleDrawer } from "../../store/reducer";

export default function Header() {
    const currentPageSize = useAppSelector(state => state.chistoap.currentPageSize)
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(toggleDrawer())
        console.log("dsfd")
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.container_left}>
                <Typography variant="h4">Номенклатура</Typography>
                <Typography className={styles.nomen}>{currentPageSize} единиц</Typography>
            </Box>
            <Box className={styles.container_right}>
                <Search />
                <Button
                onClick={() => openModal()}
                    sx={{
                        backgroundColor: 'rgba(168, 87, 87, 1)',
                        '&:hover': { backgroundColor: 'rgba(168, 87, 87, 1)' }
                    }}
                    variant="contained" startIcon={<AddIcon />}>

                    Новая позиция
                </Button>
            </Box>

        </Box>
    )
}
