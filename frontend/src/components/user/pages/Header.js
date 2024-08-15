import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
// import Title from 'antd/lib/typography/Title';
// import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const Logout = () =>{
        LocalStorages.removeToken('all');
        navigate("/user/login");
    }
    return (<div><h1>Header</h1><Button onClick={Logout} className="Button" htmlType="button" type="danger">Logout</Button></div>)
}

export default Header