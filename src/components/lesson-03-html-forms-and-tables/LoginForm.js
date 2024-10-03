import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Flex, Typography, Modal} from 'antd';

const {Title, Paragraph} = Typography;

const LoginForm = (isModalOpenLoginForm, onCancel) => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            className="mx-auto"
            name="login"
            initialValues={{
                remember: true,
            }}
            style={{
                maxWidth: 360,
            }}
            onFinish={onFinish}
        >

            <Title level={2} className="text-center my-4">
                Đăng nhập
            </Title>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tài khoản!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Tài khoản"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                    },
                ]}
            >
                <Input prefix={<LockOutlined/>} type="password" placeholder="Mật khẩu"/>
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Ghi nhớ</Checkbox>
                    </Form.Item>
                    <a href="" className="text-sky-500">Quên mật khẩu</a>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
                hoặc <a href="" className="text-sky-500">Đăng ký</a>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;
