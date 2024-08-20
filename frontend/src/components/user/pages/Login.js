import React from 'react';
import { Form, Input, Button, Flex, Row, Col, Divider, notification } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';

import {useDispatch} from 'react-redux'
import { updateRole } from '../../../services/store/Reducer'

 import './allStyle.css';
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
                dispatch(updateRole(res.data.typeRole))
                console.log('login : '+ res.data.typeRole)
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
    const toSearch = () => {
        navigate("/user/search");
    }
    return (
        <div >
        <Row justify="center">
            <Col className="card_bg" xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    <Flex justify="left">
                        <Title level={4} className="Title">Login</Title>
                    </Flex>
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
                            type="email"
                            size="large"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="pass"
                            size="large"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Flex gap="middle" justify="right" horizontal style={{}}>
                            <Button onClick={toRegis} className="Button button_link_style" htmlType="button" type="link" size="large">Sign up</Button>
                            <Button className="Button button_style" htmlType="submit" size="large">Login</Button>
                        </Flex>
                    </Form>
                </div>
                <Divider
                    variant="dotted"
                    style={{
                        borderColor: 'gray'
                    }}
                    >
                    <span style={{fontSize:'14px',fontWeight:'regular',color:'gray'}}>OR</span>
                </Divider>
                <div style={{textAlign:'center'}}><Button className="Button button_style" htmlType="button" size="large" onClick={toSearch}>Find Package Tour</Button></div>
            </Col>
        </Row>
        </div>
    );
}

export default Login