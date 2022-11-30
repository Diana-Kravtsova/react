import './Card.css'
import React, {useState} from 'react';
import {BsPencilSquare, BsCheck2Square, BsXSquare} from "react-icons/bs";

function Card({caption, text}) {
    const [isChecked, setChecked] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [currentCaption, setCurrentCaption] = useState(caption);
    const [previousCaption, setPreviousCaption] = useState(caption);
    const [currentText, setCurrentText] = useState(text);
    const [previousText, setPreviousText] = useState(text);

    const handleCheckbox = () => {
        setChecked(!isChecked);
    };
    const handleEdit = () => {
        setEdit(!isEdit);
        setPreviousCaption(currentCaption);
        setPreviousText(currentText);
        setChecked(false);
    };
    const handleCaption = (event) => {
        setCurrentCaption(event.target.value);
    };
    const handleClose = () => {
        setCurrentCaption(previousCaption);
        setCurrentText(previousText);
        handleEdit();
    };
    const handleText = (event) => {
        setCurrentText(event.target.value);
    };

    return isEdit ?
        (<div className={'card'}>
            <div className={'card-caption'}>

                <input value={currentCaption} type={text} onInput={handleCaption}/>

                <div className={'card-edit'}>
                    <button className={'button-pencil'}
                            onClick={handleEdit}>
                        <BsCheck2Square className={'pencil'}/>
                    </button>

                    <button className={'button-pencil'}
                            onClick={handleClose}>
                        <BsXSquare className={'exit'}/>
                    </button>
                </div>
            </div>
            <hr/>
            <div className={'card-textarea'}>
                <textarea value={currentText} onInput={handleText}/>
            </div>
        </div>)

        :

        (<div className={'card'}
              style={{backgroundColor: isChecked ? '#252525' : ''}}>

            <div className={'card-caption'}>
                {currentCaption}

                <div className={'card-edit'}>
                    <button className={'button-pencil'}
                            onClick={handleEdit}>
                        <BsPencilSquare className={'pencil'}/>
                    </button>

                    <div className={'checkbox-wrapper'}>
                        <input onChange={handleCheckbox}
                               type={'checkbox'}
                               checked={isChecked}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={'card-text'}>
                {currentText}
            </div>
        </div>);
}

export default Card;
