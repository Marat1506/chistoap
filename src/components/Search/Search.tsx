import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import useSearch from '../../hooks/use-search';



export default function Search() {

    const {itemName, handleChange, handleSearch} = useSearch()
    
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton type="button" aria-label="search"
                onClick={() => handleSearch()}
            >
                <SearchIcon />
            </IconButton>
            <InputBase
                value={itemName}
                onChange={handleChange}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск по названию"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Button
                onClick={() => handleSearch()}
                variant="contained" sx={{
                    backgroundColor: 'rgba(81, 74, 74, 1)',
                    '&:hover': { backgroundColor: 'rgba(50, 50, 50, 1)' }
                }} >Поиск</Button>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    )
}
