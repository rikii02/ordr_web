import React, {useState} from 'react'

export const OplaceForm = ({ addOplace }) => {

    const [name, setName] = useState('');
    const [otag, setOtag] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addOplace(name, otag, description);
        setName('');
        setOtag('');
        setDescription('');
    };

    return (
        <form className="OplaceForm" onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    className="oplace-imput"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="otag-container">
                    <input
                        type="text"
                        className="otag-imput"
                        value={otag}
                        placeholder="Name"
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
            </div>
            <button type="submit" className="oplace-btn" style={{ width:'100%'}} >
                Add task
            </button>
        </form>
    );
};