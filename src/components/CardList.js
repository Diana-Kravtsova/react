import Card from './Card/Card';
import './Card/Card.css';
import { useContext } from 'react';
import { MyContext } from '../store';
import { BarLoader } from 'react-spinners';

function CardList() {
    const {
        count,
        info,
        readonly,
        editCard,
        handleCheckbox,
        isLoading,
    } = useContext(MyContext);

    if (isLoading) {
        return (
            <div className={'loading-box'}>
                <BarLoader
                    color={'#007a7e'}
                    className={'loading-spinner'}
                    width={'100%'}
                />
            </div>
        );
    }

    if (count <= 0) {
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
