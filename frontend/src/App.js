import React,{useState} from 'react';
import PermissionsRoutes from './components/permissions-routes/permissions';
import LocalStorates from './services/localStorages';
import Header from './components/user/pages/Header';
//import axios from 'axios'

function App() {
  const [role,setRole] = useState(LocalStorates.getRole());
  let setHeader = '';
  if(window.location.pathname !== '/user/login' && window.location.pathname !== '/user/register') setHeader = <Header />;
  return (
    <div className="App">
        {setHeader}
        {<PermissionsRoutes role={role} setRole={setRole}/>}
    </div>
  );
}

export default App;
