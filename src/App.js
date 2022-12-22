import Header from './components/Header';
import Cards from './components/Cards';
import {useState} from 'react';
import {BsLock, BsUnlock} from 'react-icons/bs';
import './components/Header.css'

function App() {
    let cardLength = 9;
    const [info, setInfo] = useState([...Array(cardLength).keys()].map((id) => ({
        id: id,
        caption: 'Caption',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim sapien, auctor ut bibendum in, molestie nec elit. Praesent velit magna, volutpat eu lacus vel, rutrum porta ex. Morbi vitae venenatis massa, et pretium enim. Donec sit amet condimentum urna. Morbi a mauris magna. Nunc ut nibh quis urna viverra lacinia.`
    })));

    const [readonly, setReadonly] = useState(false);

    const editCard = (id, card) => setInfo(info.map(value => value.id === id ? {id, ...card} : value));

    const handleReadonly = () => setReadonly(!readonly);

    return (
        <div>
            <Header>
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
            </Header>
            <Cards {...{info, editCard, readonly}} />
        </div>
    );
}

export default App;
