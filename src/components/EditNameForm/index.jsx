import { useState } from 'react';
import '../../css/main.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../selector';
import { updateUserProfile } from '../../slices/UserSlice';

// eslint-disable-next-line react/prop-types
function EditNameForm({ onCancel }) {
  const [userName, setUserName] = useState('');
  const { firstName, lastName } = useSelector(selectUser);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  console.log("firstName:", firstName);
  console.log("lastName:", lastName);


  const handleSave = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      setError('Veuillez saisir un nom d\'utilisateur.');
      return;
    }
    console.log('New user data to update:', { userName });

    setError('');
    dispatch(updateUserProfile({ userName }));

    setUserName('');

  };


  return (
    <form className="edit-user-info" id='user-info-form' onSubmit={handleSave}>
      <h1 className="title">Edit user info</h1>
      {error && <p className="error-message">{error}</p>}
      <div className='input'>
        <label className='label'>User name:</label>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input-field"
        />
        <label className='label'>First name:</label>
        <input
          disabled
          type="text"
          placeholder="First name"
          value={firstName}
          className="input-field"
        />
        <label className='label'>Last name:</label>
        <input
          disabled
          type="text"
          placeholder="Last name"
          value={lastName}
          className="input-field"
        />
      </div>
      <div className='button'>
        <button type='submit' className="save-button">Save</button>
        <button onClick={onCancel} type='button' className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}

export default EditNameForm;
