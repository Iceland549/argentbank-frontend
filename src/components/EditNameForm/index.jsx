import { useState } from 'react';
import '../../css/main.css'
import { useDispatch } from 'react-redux';
import { updateUserName } from '../../pages/User/UserSlice';

function EditNameForm() {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const handleSave = (e) => {
      e.preventDefault();
        if (!userName.trim()) {
            setError('Veuillez saisir un nom d\'utilisateur.');
            return; 
        }

        setError('');
        dispatch(updateUserName(userName));

        setUserName('');
        setFirstName('');
        setLastName('');
    };

    const handleCancel = () => {
        setUserName('');
        setFirstName('');
        setLastName('');
    };
  
  return (
    <form className="edit-user-info" id='user-info-form'>
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
          type="text" 
          placeholder="First name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          className="input-field"
        />
        <label className='label'>Last name:</label>
        <input 
          type="text" 
          placeholder="Last name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          className="input-field"
        />
      </div>
      <div className='button'>
        <button onClick={handleSave} className="save-button">Save</button>
        <button onClick={handleCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}

export default EditNameForm;
