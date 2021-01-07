import { createContext, useState } from 'react';
import { ShapeItem } from '../models/ShapeItem';

export interface ContextType {
    shapeItems: ShapeItem[],
    shapeItemsFiltered: ShapeItem[],
    deleteShapeItem: (item: ShapeItem) => void,
    addShapeItem: (item: ShapeItem) => void,
    updateShapeItem: (item: ShapeItem) => void,
    shapeItemSelectedForUpdate: ShapeItem | null,
    showModal: boolean,
    handleCloseModal: () => void,
    handleOpenModal: (item?: ShapeItem) => void,
    handleSearch: (word: string) => void,
    wordToSearch: string
}

export const Context = createContext<ContextType | null>(null);

interface Props {
    children: React.ReactNode
}

// HOC
export const Provider = ({ children }: Props) => {

    const [shapeItems, setShapeItems] = useState<ShapeItem[]>([{ id: 1,  name: 'Circle' }, { id: 2, name: 'Rectangle' }]);
    const [shapeItemsFiltered, setShapeItemsFiltered] = useState<ShapeItem[]>([{ id: 1,  name: 'Circle' }, { id: 2, name: 'Rectangle' }]);

    const [shapeItemSelectedForUpdate, setShapeItemSelectedForUpdate] = useState<ShapeItem | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [wordToSearch, setWordToSearch] = useState<string>('');

    const deleteShapeItem = (item: ShapeItem): void => {
        setShapeItems(prev => prev.filter(x => x.id !== item.id));
        setShapeItemsFiltered(prev => prev.filter(x => x.id !== item.id));
    }

    const addShapeItem = (item: ShapeItem) => {
        setShapeItems(prev => [...prev, { name: item.name, id: prev.length + 1 }]);
        setShapeItemsFiltered(prev => [...prev, { name: item.name, id: prev.length + 1 }]);
        reset();
    }

    const updateShapeItem = (item: ShapeItem) => {
        setShapeItems(prev => prev.map(x => {
            if (x.id === item.id) {
                return { ...x, name: item.name };
            }

            return x;
        }));
        setShapeItemsFiltered(prev => prev.map(x => {
            if (x.id === item.id) {
                return { ...x, name: item.name };
            }

            return x;
        }));
        reset();
    }

    // handlers
    const handleCloseModal = () => {
        setShapeItemSelectedForUpdate(null);
        setShowModal(false);
       // reset();
    };
    const handleOpenModal = (item?: ShapeItem) => {
        setShapeItemSelectedForUpdate(item ? item : null);
        setShowModal(true);
        //reset();
    }

    const handleSearch = (word: string) => {
        setWordToSearch(word);

        if (!word) {
            setShapeItemsFiltered(shapeItems);
            return;
        }

        setShapeItemsFiltered(shapeItems.filter(item => item.name.toLowerCase().includes(word)));
    }

    const reset = () => {
        setWordToSearch('');
    }


    const value: ContextType = {
        shapeItems,
        deleteShapeItem,
        addShapeItem,
        handleOpenModal,
        handleCloseModal,
        showModal,
        shapeItemSelectedForUpdate,
        updateShapeItem,
        shapeItemsFiltered,
        handleSearch,
        wordToSearch,
    }

    return (
        <Context.Provider value={value}>
            { children }
        </Context.Provider>
    )
}
