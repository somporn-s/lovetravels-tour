import React,{useState} from 'react';
import PermissionsRoutes from './components/permissions-routes/permissions';
//import axios from 'axios'

function App() {
  const [role,setRole] = useState("user");
  return (
    <div className="App">
        {<PermissionsRoutes role={role} setRole={setRole}/>}
    </div>
  );
}

export default App;
