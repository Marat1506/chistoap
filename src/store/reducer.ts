import { createSlice } from "@reduxjs/toolkit"
interface Item {
    name: string;
    measurement_units: string;
    code: string;


}
interface initialState {
    currentPage: number;
    currentPageSize: number;
    items: Item[];
    isModalOpen: boolean;
    currentChangeItem: {
        id: string;
        name: string;
        measurement_units: string;
        code: string;
        description: string;
    }

}

const initialState: initialState = {
    currentPage: 1,
    currentPageSize: 20,
    items: [],
    isModalOpen: false,
    currentChangeItem: {
        id: '',
        name: '',
        measurement_units: '',
        code: '',
        description: ''
    },
}

const chistoapSlice = createSlice({
    name: 'chistoap',
    initialState,
    reducers: {
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload.currentPage;
        },
        changeCurrentPageSize: (state, action) => {
            state.currentPageSize = action.payload.currentPageSize;
        },
        setItems: (state, action) => {
            state.items = action.payload.items
        },
        toggleDrawer: (state) => {
            state.isModalOpen = !state.isModalOpen
        },
        changeCurrentItem: (state, action) => {
            console.log("bla = ", action.payload.changeItem)
            state.currentChangeItem.id = action.payload.changeItem.id
            state.currentChangeItem.name = action.payload.changeItem.name
            state.currentChangeItem.measurement_units = action.payload.changeItem.measurement_units
            state.currentChangeItem.code = action.payload.changeItem.code
            state.currentChangeItem.description = action.payload.changeItem.id
        },
        resetCurrentItem: (state) => {
            state.currentChangeItem = {
                id: '',
                name: '',
                measurement_units: '',
                code: '',
                description: '',
            };
        },

    }
})

export const {
    changeCurrentPage,
    changeCurrentPageSize,
    setItems,
    toggleDrawer,
    changeCurrentItem,
    resetCurrentItem,
} = chistoapSlice.actions
export default chistoapSlice.reducer