import '../../css/main.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selector'; 
import EditNameForm from '../EditNameForm';
import Account from '../Account';

function UserAccount() {
  const user = useSelector(selectUser); 
  console.log('User data:', user); 
  const [isEditName, setIsEditName] = useState(false);


  const handleEditNameClick = () => {
    setIsEditName(true);
  }

  return (
    <main className="main bg-dark">
      <div className="header">
      {!isEditName && (
        <>
          <h1>Welcome back<br />{user ? user.userName : 'Guest'}!</h1>
          <button className="edit-button" onClick={handleEditNameClick}>Edit Name</button>
        </>
      )}
        {isEditName && <EditNameForm />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}

export default UserAccount;

