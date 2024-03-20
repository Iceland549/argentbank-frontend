// Error
import { Link } from 'react-router-dom';


function Error() {
  return (
    <div className='error-container'>
      <h1>404</h1>
      <p>Oups ! La page que <br/> vous demandez n&apos;exite pas.</p>
      <Link to={`/`}>
        <p className='error-link'> Retourner sur la page d&apos;acceuil</p>
      </Link>
    </div>
  );
}

export default Error;
