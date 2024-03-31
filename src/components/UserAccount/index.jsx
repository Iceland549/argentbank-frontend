import '../../css/main.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selector'; 
import EditNameForm from '../EditNameForm';

function UserAccount() {
  const user = useSelector(selectUser); 
  const [isEditName, setIsEditName] = useState(false);

  const handleEditNameClick = () => {
    setIsEditName(true);
  }

  return (
    <main className="main bg-dark">
      <div className="header">
      {!isEditName && (
        <>
          <h1>Welcome back<br />{user ? user : 'Tony'}!</h1>
          <button className="edit-button" onClick={handleEditNameClick}>Edit Name</button>
        </>
      )}
        {isEditName && <EditNameForm />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserAccount;

