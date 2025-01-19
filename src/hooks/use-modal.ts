import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createItem, getItems, changeItem } from "../request/request";
import { toggleDrawer, resetCurrentItem, setItems } from "../store/reducer";
import { useAppSelector, useAppDispatch } from "./use-redux-types";


export default function useModal() {
    const isModalOpen = useAppSelector((state) => state.chistoap.isModalOpen);
    const currentChangeItem = useAppSelector(state => state.chistoap.currentChangeItem)
    const currentPage = useAppSelector(state => state.chistoap.currentPage)
    const currentPageSize = useAppSelector(state => state.chistoap.currentPageSize)
    const dispatch = useAppDispatch();


    const [formData, setFormData] = useState({
        name: '',
        measurement_units: '',
        code: '',
        description: '',

    })

    useEffect(() => {
        if (currentChangeItem?.id) {
            setFormData({
                name: currentChangeItem.name || '',
                measurement_units: currentChangeItem.measurement_units || '',
                code: currentChangeItem.code || '',
                description: currentChangeItem.description || '',
            });
        } else {
            setFormData({
                name: '',
                measurement_units: '',
                code: '',
                description: '',
            });
        }
    }, [currentChangeItem, isModalOpen]);

    const handleToggleDrawer = () => {
        dispatch(toggleDrawer());

        dispatch(resetCurrentItem());
    setFormData({
        name: '',
        measurement_units: '',
        code: '',
        description: '',
    });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreateItem = async () => {
        if (!formData.name || !formData.measurement_units || !formData.code || !formData.description) {
            toast.error('Пожалуйста, заполните все поля перед созданием.');
            return;
        }
        try {
            await createItem(formData);
            setFormData({
                name: '',
                measurement_units: '',
                code: '',
                description: '',
            });
            handleToggleDrawer();
            const updatedData = await getItems(currentPage, currentPageSize);
            dispatch(setItems({ items: updatedData.result }));
            toast.success('Номенклатура успешно создана!');

           
        } catch (error) {
            toast.error('Произошла ошибка при создании номенклатуры.');
            console.error(error);
        }
    };

    const handleChangeItem = async (currentChangeItem: {
        id: string;
        name: string;
        measurement_units: string;
        code: string;
        description: string;

    }) => {
        try {
            if (!formData.name || !formData.measurement_units || !formData.code || !formData.description) {
                toast.error('Пожалуйста, заполните все поля перед изменением.');
                return;
            }
            await changeItem({ params: formData, id: currentChangeItem.id });
            handleToggleDrawer();
            const updatedData = await getItems(currentPage, currentPageSize);
            dispatch(setItems({ items: updatedData.result }));
            toast.success('Номенклатура успешно изменена!');         
        } catch (error) {
            toast.error('Произошла ошибка при изменении элемента.');
            console.error(error);
        }
    }
  return {
    formData,
    currentChangeItem,
    isModalOpen,
    
    handleChange,
    handleChangeItem,
    handleCreateItem,
    handleToggleDrawer
  }
}
