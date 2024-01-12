import React, { useState } from 'react';

export const EditOplaceForm = ({ editOplace, service }) => {

    const [name, setName] = useState(service.title);
    const [otag, setOtag] = useState(service.title);
    const [description, setDescription] = useState(service.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        editOplace(name, otag, description, service.id);
        setName('');
        setOtag('');
        setDescription('');
    };

    return (
        <form className='OplaceForm' onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            className="oplace-input"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            className="oplace-input"
            value={otag}
            placeholder="Otag"
            onChange={(e) => setOtag(e.target.value)}
            />
            <div className="description-container">
                <textarea
                className="description-input"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
          </div>
            <button type='submit' className='oplace-btn'>Update service</button>
        </form>
    );
};
