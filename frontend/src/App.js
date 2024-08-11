import React,{useState} from 'react';
import PermissionsRoutes from './components/permissions-routes/permissions';
//import axios from 'axios'

function App() {
  const [role,setRole] = useState("user");
  return (
    <div className="App">
        <div>
          <h3>Register user</h3>
          <form action="http://localhost:8080/user/register" method="post">
            <input type="email" name="email" placeholder="email"/>
            <input type="password" name="pass" placeholder="password"/>
            <input type="password" name="conf_pass" placeholder="password"/>
            <button type="submit">register</button>
          </form>
        </div>
        <div>
          <h3>Login user</h3>
          <form action="http://localhost:8080/user/login" method="post">
            <input type="text" name="email" placeholder="username"/>
            <input type="password" name="pass" placeholder="password"/>
            <button type="submit">login</button>
          </form>
        </div>
        <br />
        <div>
          <h3>Register agent</h3>
          <form action="http://localhost:8080/agent/register" method="post">
            <input type="text" name="license" placeholder="license"/>
            <input type="text" name="user" placeholder="user"/>
            <input type="password" name="pass" placeholder="pass"/>
            <input type="password" name="conf_pass" placeholder="conf_pass"/>
            <input type="text" name="company" placeholder="company"/>
            <input type="email" name="email" placeholder="email"/>
            <input type="tel" name="phone" placeholder="phone"/>
            <input type="file" name="payment" placeholder="qrcode payment" />
            <button type="submit">register</button>
          </form>
        </div>
        <br />
        <div>
          <h3>Login user</h3>
          <form action="http://localhost:8080/agent/login" method="post">
            <input type="text" name="user" placeholder="username"/>
            <input type="password" name="pass" placeholder="password"/>
            <button type="submit">login</button>
          </form>
        </div>
        <br />
        {<PermissionsRoutes role={role} setRole={setRole}/>}
    </div>
  );
}

export default App;
