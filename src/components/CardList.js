import Card from './Card/Card';
import './Card/Card.css';
import { useContext } from 'react';
import { MyContext } from '../store';

function CardList() {
    const {
        info,
        readonly,
        editCard,
        handleCheckbox,
    } = useContext(MyContext);

    if (info.length <= 0) {
        return <p style={{ textAlign: 'center' }}>All cards are gone...</p>;
    }

    return (
        <div className={'cards'}>
            {
                info.map(({ id, caption, text, checked }) => (
                    <Card
                        key={id}
                        edit={card => editCard(id, card)}
                        onCheck={newValue => handleCheckbox(id, newValue)}
                        {...{ caption, text, checked, readonly }}
                    />
                ))
            }
        </div>
    );
}

export default CardList;
