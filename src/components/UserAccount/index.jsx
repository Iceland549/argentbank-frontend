import '../../css/main.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../pages/User/UserSlice'; 
import { selectUser } from '../../selector'; 
import EditNameForm from '../EditNameForm';

function UserAccount() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); 
  const [isEditName, setIsEditName] = useState(false);


  useEffect(() => {
    dispatch(loginUser({ email: 'tony@stark.com', password: 'password123' }));
  }, [dispatch]);

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

