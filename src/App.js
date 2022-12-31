import Header from './components/Header';
import CardList from './components/CardList';
import {useState} from 'react';
import {BsLock, BsTrash2, BsUnlock} from 'react-icons/bs';
import './components/Header.css';

function App() {
    let cardLength = 9;
    const [info, setInfo] = useState([...Array(cardLength).keys()].map((id) => ({
        id: id,
        caption: 'Caption',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim sapien, auctor ut bibendum in, molestie nec elit. Praesent velit magna, volutpat eu lacus vel, rutrum porta ex. Morbi vitae venenatis massa, et pretium enim. Donec sit amet condimentum urna. Morbi a mauris magna. Nunc ut nibh quis urna viverra lacinia.`,
        checked: false,
    })));

    const [readonly, setReadonly] = useState(false);

    const editCard = (id, card) => setInfo(info.map(value => value.id === id ? {id, ...card} : value));

    const handleReadonly = () => setReadonly(!readonly);
    const handleDelete = () => setInfo(info.filter(({checked}) => !checked));

    const handleCheckbox = (id, checked) => {
        setInfo(info.map(value => value.id === id ? {...value, checked} : value));
    };

    let content = (
        <p style={{ textAlign: 'center' }}>All cards are gone...</p>
    );

    if (info.length > 0) {
        content = (
            <CardList {...{info, editCard, readonly, handleCheckbox}} />
        );
    }

    return (
        <div>
            <Header>
                <div>
                    {
                        readonly || (
                            <button
                                className={'button-delete'}
                                onClick={handleDelete}
                                disabled={!info.length}
                            >
                                <BsTrash2 className={'delete'}/>
                            </button>
                        )
                    }
                    <button
                        className={'button-readonly'}
                        onClick={handleReadonly}
                    >
                        {
                            readonly ?
                                <BsUnlock className={'lock'}/>
                                : <BsLock className={'lock'}/>
                        }
                    </button>
                </div>
            </Header>
            {content}
        </div>
    );
}

export default App;
