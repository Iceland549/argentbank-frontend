import '../../css/main.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../selector';
import EditNameForm from '../../components/EditNameForm';
import Account from '../../components/Account';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../slices/UserSlice';

function User() {
    const user = useSelector(selectUser);
    const { firstName, lastName } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    console.log('User data:', user);
    const [isEditName, setIsEditName] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            dispatch(getUser());
        }
    }, [token, navigate, dispatch]);

    const handleEditNameClick = () => {
        setIsEditName(!isEditName);
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isEditName && (
                    <>
                        <h1>Welcome back<br />{user ? `${firstName} ${lastName}` : 'Guest'}!</h1>
                        <button className="edit-button" onClick={handleEditNameClick}>Edit Name</button>
                    </>
                )}
                {isEditName && <EditNameForm onCancel={handleEditNameClick} />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
}

export default User;

