import React,{useState} from 'react'
import ConfigRoutes from '../../routers/routers';
import { Routes,Route,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function PrivateRoutes(props) {
    const { role } = useSelector((state) => state.Roles)
    //const [role , setRole] = useState(getRole)
    //const role = LocalStorates.getRole()
    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoutes = ConfigRoutes[role].redirectRoutes;

  return (
    <Routes>
        {allowedRoutes.map(route => <Route 
            path={route.url}
            keys={route.url}
            element={<route.component />}
         />)}
        <Route path="*" element={<Navigate to={redirectRoutes} />} />
    </Routes>
  )
}

export default PrivateRoutes
