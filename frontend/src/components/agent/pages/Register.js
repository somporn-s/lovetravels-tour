import React from 'react';
//import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
//import Title from 'antd/lib/typography/Title';
//import axios from '../../config/axios';
//import { useNavigate } from 'react-router-dom';
function Register(props) {
    return (
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
    )
}
export default Register