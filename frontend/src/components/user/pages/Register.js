import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from '../../../routers/axios';
import { useNavigate } from 'react-router-dom';
const layout = {
    labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
    wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};
function Register(props) {
    const navigate = useNavigate();
    const onFinish = values => {
        //console.log('Received values of form: ', values);
        const body = {
            email: values.email,
            pass: values.password,
            conf_pass: values.confirm
        }
        axios.post('user/register',body).then(
            res => {
                notification.success({
                    message: `Register successfully by ${values.nickname}`
                });
               navigate("user/login");
            }
        ).catch(
            res => {
                notification.error({
                    message: `Register fail by ${res}`
                });
            }
        );
    };

    return (
        <Row justify="center" >
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div
                    className="Form"
                >
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Register
                        </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
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
                            name="password"
                            label="password"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            hasFeedback
                            dependencies={["password"]} //if password field change rules in confirm password will run again
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },({getFieldValue}) => ({ //{} noreturn | ({}) return obj
                                    validator(rule, value){
                                        if(!value || getFieldValue('password') === value){
                                            return Promise.resolve();
                                        }
                                        return Promise.reject("Confirm password must equal password")
                                    }
                                }) 
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                            <Button className="Button" type="primary" htmlType="submit">
                                Register
                            </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

export default Register;