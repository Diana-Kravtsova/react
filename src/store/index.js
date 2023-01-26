import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPokemons } from '../services/PokemonService';

const MyContext = createContext({});

const Provider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const [readonly, setReadonly] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getPokemons().then((response) => {
            setTimeout(() => {
                setInfo(response.map(data => {
                    return {
                        id: uuidv4(),
                        caption: data['Name'],
                        text: data['About'],
                        checked: false,
                    };
                }));
                setIsLoading(false);
            }, 1000);
        });
    }, []);

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
            isLoading,
        }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext };

export default Provider;
