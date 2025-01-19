import { useEffect } from "react"
import { getItems } from "../request/request"
import { setItems, toggleDrawer, changeCurrentItem } from "../store/reducer"
import { useAppSelector, useAppDispatch } from "./use-redux-types"
import { Item } from "../store/types"


export default function useTable() {
    const items = useAppSelector(state => state.chistoap.items)
    const currentPage = useAppSelector(state => state.chistoap.currentPage)
    const currentPageSize = useAppSelector(state => state.chistoap.currentPageSize)
    const dispatch = useAppDispatch()


    useEffect(() => {
        const fetchData = async () => {
            const data = await getItems(currentPage, currentPageSize)
            console.log("rr = ", data)
            dispatch(setItems({ items: data.result }))
        }
        fetchData()
    }, [currentPage, currentPageSize, dispatch])

    const handleChangeItem = (item: Item) => {
        dispatch(toggleDrawer());
        dispatch(changeCurrentItem({ changeItem: item }))
    }
  return {
    items,
    handleChangeItem
  }
}
