import React, {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Login/login.scss'
import Logout from './Logout';
import { PropagateLoader } from 'react-spinners';


function Profile() {
  const { user, isLoading } = useAuth0();
  const [openWindow, setOpenWindow] = useState(true);

  const closeWindow =()=>{
    setOpenWindow(false)
  }

  if (isLoading) {
    return <div><PropagateLoader color="#36d7b7" /></div>;
  }

  return (
    openWindow  && (
      <div className='opacity'>
      <div className='profileLogin'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>      
        <p>{user.updated_at}</p>
        <Logout/>
        <button className='btn-login' onClick={closeWindow}>Cerrar</button>
      </div>
      </div>
    )
  );
}

export default Profile