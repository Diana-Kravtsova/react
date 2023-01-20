import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MyContext = createContext({});

const Provider = ({ children }) => {
    let cardLength = 3;
    const [info, setInfo] = useState([...Array(cardLength).keys()].map(() => ({
        id: uuidv4(),
        caption: 'Caption',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim sapien, auctor ut bibendum in, molestie nec elit. Praesent velit magna, volutpat eu lacus vel, rutrum porta ex. Morbi vitae venenatis massa, et pretium enim. Donec sit amet condimentum urna. Morbi a mauris magna. Nunc ut nibh quis urna viverra lacinia.`,
        checked: false,
    })));

    const [readonly, setReadonly] = useState(false);

    const editCard = (id, card) => setInfo(info.map(value => value.id === id ? { id, ...card } : value));

    const addCard = () => setInfo([...info, { id: uuidv4(), caption: '', text: '', checked: false }]);

    const handleReadonly = () => setReadonly(!readonly);

    const handleDelete = () => setInfo(info.filter(({ checked }) => !checked));

    const handleCheckbox = (id, checked) => {
        setInfo(info.map(value => value.id === id ? { ...value, checked } : value));
    };

    return (
        <MyContext.Provider value={{
            info,
            count: info.length,
            readonly,
            editCard,
            addCard,
            handleReadonly,
            handleDelete,
            handleCheckbox,
        }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext };

export default Provider;
