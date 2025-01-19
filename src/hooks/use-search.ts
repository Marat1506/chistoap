import { useState, ChangeEvent } from "react"
import { setItems } from "../store/reducer"
import { useAppSelector, useAppDispatch } from "./use-redux-types"


export default function useSearch() {
    const [itemName, setItemName] = useState('')
    const items = useAppSelector(state => state.chistoap.items)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value)
    }

    const handleSearch = () => {
        if (!itemName) {
            dispatch(setItems({items:items})) 
            return;
        }
        const lowerCaseName = itemName.toLowerCase();
        const filtered = items.filter((item: { name: string }) =>
            item.name.toLowerCase().startsWith(lowerCaseName)
        );
        dispatch(setItems({items: filtered}));
    };
  return {
    itemName,
    handleChange,
    handleSearch
  }
}
