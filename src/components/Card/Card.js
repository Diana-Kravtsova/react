import './Card.css'
import {useEffect, useState} from 'react';
import {BsPencilSquare, BsCheck2Square, BsXSquare} from 'react-icons/bs';
import Checkbox from '../Checkbox';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

function Card({caption, text, checked, edit, readonly, onCheck}) {
    const [isEdit, setEdit] = useState(false);
    const [card, setCard] = useState({caption, text, checked});

    useEffect(() => {
        readonly && setEdit(false);
    }, [readonly]);

    const closeCard = () => {
        setEdit(!isEdit);
        setCard({caption, text, checked: false});
    };

    const saveCard = () => {
        edit(card);
        closeCard();
    };

    const editCard = () => {
        onCheck(false);
        closeCard();
    };

    const checkbox = (
        <Checkbox
            onChange={() => onCheck(!(isEdit || checked))}
            {...{checked}}
        />
    );

    return (
        <div
            className={'card'}
            style={{backgroundColor: checked ? '#252525' : ''}}
        >
            <CardHeader
                onEdit={caption => setCard({...card, caption})}
                {...{caption, isEdit, editedCaption: card.caption, readonly, checkbox}}
            >
                {
                    isEdit ? (
                        <div className={'card-edit'}>
                            <button className={'button-pencil'} onClick={saveCard}>
                                <BsCheck2Square className={'pencil'}/>
                            </button>
                            <button className={'button-pencil'} onClick={closeCard}>
                                <BsXSquare className={'exit'}/>
                            </button>
                        </div>
                    ) : (
                        <button className={'button-pencil'} onClick={editCard}>
                            <BsPencilSquare className={'pencil'}/>
                        </button>
                    )
                }
            </CardHeader>
            <hr/>
            <CardBody
                onEdit={text => setCard({...card, text})}
                {...{text, isEdit, editedText: card.text, readonly}}
            />
        </div>
    )
}

export default Card;
