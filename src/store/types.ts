
export interface Item {
    id?: string;
    name: string;
    measurement_units: string;
    code: string;

}
export interface initialStateType {
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