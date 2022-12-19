import './Card.css'
import {useEffect, useState} from 'react';
import {BsPencilSquare, BsCheck2Square, BsXSquare} from 'react-icons/bs';
import Checkbox from './Checkbox';

function Card({caption, text, edit, readonly}) {
    const [isChecked, setChecked] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [card, setCard] = useState({caption, text});

    useEffect(() => {
        readonly && setEdit(false);
    }, [readonly]);

    const handleCheckbox = () => {
        setChecked(!isChecked);
    };

    const closeCard = () => {
        setEdit(!isEdit);
        setChecked(false);
        setCard({caption, text});
    };

    const editCaption = (event) => {
        setCard({...card, caption: event.target.value});
    }
    const editText = (event) => {
        setCard({...card, text: event.target.value});
    }

    const saveCard = () => {
        edit(card);
        closeCard();
    };

    if (readonly) {
        return (
            <div
                className={'card'}
                style={{backgroundColor: isChecked ? '#252525' : ''}}
            >
                <div className={'card-caption'}>
                    {caption}
                    <div className={'card-edit'}>
                        <Checkbox {...{handleCheckbox, isChecked}}/>
                    </div>
                </div>
                <hr/>
                <div className={'card-text'}>
                    {text}
                </div>
            </div>
        )
    }

    if (isEdit) {
        return (
            <div className={'card'}>
                <div className={'card-caption'}>
                    <input
                        value={card.caption}
                        type={text}
                        onChange={editCaption}
                    />
                    <div className={'card-edit'}>
                        <button
                            className={'button-pencil'}
                            onClick={saveCard}
                        >
                            <BsCheck2Square className={'pencil'}/>
                        </button>
                        <button
                            className={'button-pencil'}
                            onClick={closeCard}
                        >
                            <BsXSquare className={'exit'}/>
                        </button>
                    </div>
                </div>
                <hr/>
                <div className={'card-textarea'}>
                    <textarea
                        value={card.text}
                        onChange={editText}
                    />
                </div>
            </div>
        )
    }

    return (
        <div
            className={'card'}
            style={{backgroundColor: isChecked ? '#252525' : ''}}
        >
            <div className={'card-caption'}>
                {caption}
                <div className={'card-edit'}>
                    <button
                        className={'button-pencil'}
                        onClick={closeCard}
                    >
                        <BsPencilSquare className={'pencil'}/>
                    </button>
                    <Checkbox {...{handleCheckbox, isChecked}}/>
                </div>
            </div>
            <hr/>
            <div className={'card-text'}>
                {text}
            </div>
        </div>
    );
}

export default Card;
