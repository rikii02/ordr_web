import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Oplace = ({task, deleteOplace, editOplace}) => {
    return (
        <div className='Oplace'>
            <div>
                <p className='oplace-name'>{task.name}</p>
                <div className='oplace-otag'>{task.otag}</div>
                <div className='oplace-description'>{task.description}</div>
            </div>
            <div>
                <FontAwesomeIcon className='fa-icon edit-icon' icon ={faPenToSquare} onClick={() => editOplace(task.id)}/>
                <FontAwesomeIcon className='fa-icon delete-icon' icon={faTrash} onClick={() => deleteOplace(task.id)}/>
            </div>
        </div>
    );
};
