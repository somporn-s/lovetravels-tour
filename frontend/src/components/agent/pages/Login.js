import React from 'react';
//import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
//import Title from 'antd/lib/typography/Title';
//import axios from '../../config/axios';
//import { useNavigate } from 'react-router-dom';
function Login(props) {
    return (
        <div>
          <h3>Login user</h3>
          <form action="http://localhost:8080/agent/login" method="post">
            <input type="text" name="user" placeholder="username"/>
            <input type="password" name="pass" placeholder="password"/>
            <button type="submit">login</button>
          </form>
        </div>
    )
}
export default Login