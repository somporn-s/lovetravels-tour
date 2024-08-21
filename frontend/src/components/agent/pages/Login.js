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
            user : values.user,
            pass : values.pass
        }
        axios.post("/agent/login",body).then(res => {
                notification.success({
                    message: `Login successfully by ${values.user}`
                });
                LocalStorages.setToken(res.data)
                dispatch(updateRole(res.data.typeRole))
                navigate("/agent/booking");
            }
        ).catch(
            err => {
                console.log(err)
                notification.error({
                    message: `status : ${err.response.status} fail message : ${err.response.data.message}`
                });
            }
        );
    };
    const toRegis = () => {
        navigate("/agent/register");
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
                            label="Username"
                            name="user"
                            type="text"
                            size="large"
                            rules={[
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
            </Col>
        </Row>
        </div>
    );
}

export default Login