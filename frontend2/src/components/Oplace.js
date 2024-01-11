import React from 'react';
import {FontAwesomIcon} from '@fortawesom/react-fontawesom';
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
                <FontAwesomIcon className='fa-icon edit-icon' icon ={faPenToSquare} onClick={() => editOplace(task.id)}/>
                <FontAwesomIcon className='fa-icon delete-icon' icon={faTrash} onClick={() => deleteOplace(task.id)}/>
            </div>
        </div>
    );
};
