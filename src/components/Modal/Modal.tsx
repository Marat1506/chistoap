
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField, Typography } from '@mui/material';
import styles from './Modal.module.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useModal from '../../hooks/use-modal';


export default function Modal() {

    const {
        isModalOpen,
        formData,
        currentChangeItem,
        handleChange,
        handleChangeItem,
        handleCreateItem,
        handleToggleDrawer } = useModal()


    const DrawerList = (
        <Box className={styles.container} role="presentation">
            <Box className={styles.header}>
                <HomeIcon />
                <CloseIcon onClick={handleToggleDrawer} style={{ cursor: 'pointer' }} />
            </Box>

            {currentChangeItem ?
                <Typography sx={{ marginTop: '30px' }} variant="h4">{currentChangeItem.name}</Typography> :
                <Typography sx={{ marginTop: '30px' }} variant="h4">Новая позиция</Typography>
            }

            <Typography>Заполните все поля для создания новой номенклатуры</Typography>

            <form className={styles.form}>
                <TextField name="name" value={formData.name}
                    onChange={handleChange}
                    label="Название" variant="outlined" />
                <TextField name="measurement_units" value={formData.measurement_units}
                    onChange={handleChange}
                    label="Единицы измерения" variant="outlined" />
                <TextField name="code" value={formData.code}
                    onChange={handleChange}
                    label="Артикул/код" variant="outlined" />
                <TextField name="description" value={formData.description}
                    onChange={handleChange}
                    label="Описание" variant="outlined" multiline rows={4} />
            </form>

            <Box className={styles.bottom}>
                <Button
                    sx={{
                        backgroundColor: 'rgba(81, 74, 74, 1)',
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(81, 74, 74, 1)' },
                    }}
                    onClick={handleToggleDrawer}
                >
                    Отмена
                </Button>
                <Button
                    onClick={currentChangeItem ? () => handleChangeItem(currentChangeItem) : handleCreateItem}
                    sx={{
                        backgroundColor: 'rgba(168, 87, 87, 1)',
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(168, 87, 87, 1)' },
                    }}
                >
                    Подтвердить
                </Button>
            </Box>
        </Box>
    );

    return (
        <Box>
            <Drawer anchor="right" open={isModalOpen} onClose={handleToggleDrawer}>
                {DrawerList}
            </Drawer>
            <ToastContainer position="top-right" autoClose={3000} />
        </Box>
    );
}
