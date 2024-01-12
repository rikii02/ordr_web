import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Oplace = ({ service, deleteOplace, editOplace }) => {
  return (
    <div className='Oplace'>
        <div>
            <p className='oplace-name'>{service.name}</p>
            <p className='oplace-otag'>{service.otag}</p>
            <div className='oplace-description'>{service.description}</div>
        </div>
        <div>
        <FontAwesomeIcon className='fa-icon edit-icon' icon={faPenToSquare} onClick={() => editOplace(service.id)}/>
        <FontAwesomeIcon className='fa-icon delete-icon' icon={faTrash} onClick={() => deleteOplace(service.id)}/>
      </div>
    </div>
  );
};
