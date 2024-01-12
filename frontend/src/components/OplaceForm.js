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
    <div className="form-container">
      <form className="OplaceForm" onSubmit={handleSubmit}>
        <div className="oplace-container">
          <input
            type="text"
            className="oplace-input"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="otag-container">
          <input
            type="text"
            className="otag-input"
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
        </div>
        <button type="submit" className="oplace-btn" style={{ width: '100%' }}>
          Add it!
        </button>
      </form>
    </div>
    );
};