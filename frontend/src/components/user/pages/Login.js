import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';

import {useDispatch} from 'react-redux'
import { updateRole } from '../../../services/store/Reducer'
const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const onFinish = values => {
        const body = {
            email : values.email,
            pass : values.pass
        }
        axios.post("/user/login",body).then(res => {
                notification.success({
                    message: `Login successfully by ${values.email}`
                });
                LocalStorages.setToken(res.data)
                dispatch(updateRole(LocalStorages.getRole()))
                //navigate("/user/search");
            }
        ).catch(
            err => {
                notification.error({
                    message: `status : ${err.response.status} fail message : ${err.response.data.message}`
                });
            }
        );
    };
    const toRegis = () => {
        navigate("/user/register");
    }
    return (
        <Row justify="center">
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Login
                    </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        className="App"
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="pass"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Row style={{float: 'right'}}>
                            <Button onClick={toRegis} className="Button" htmlType="button" type="link">Sign up</Button>
                            <Button className="Button" type="primary" htmlType="submit">Submit</Button>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

export default Login