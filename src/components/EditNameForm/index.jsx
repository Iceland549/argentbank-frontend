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


    const handleSave = () => {
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
    <div className="edit-user-info">
      <h1 className="title">Edit user info</h1>
      {error && <p className="error-message">{error}</p>}
      <input 
        type="text" 
        placeholder="User name" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        className="input-field"
      />
      <input 
        type="text" 
        placeholder="First name" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        className="input-field"
      />
      <input 
        type="text" 
        placeholder="Last name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
        className="input-field"
      />
      <button onClick={handleSave} className="save-button">Save</button>
      <button onClick={handleCancel} className="cancel-button">Cancel</button>
    </div>
  );
}

export default EditNameForm;
