import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../components";
import './Auth.scss'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export const LoginForm = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат нужно зарегистрироватсья</p>
            </div>
            <Block>
                <Form>
                    <Form.Item
                        name="login"
                    >
                        <Input size="large" placeholder="логин" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="email"
                    >
                        <Input size="large" placeholder="почта" prefix={<MailOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                    >
                        <Input.Password size="large" placeholder="пароль" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                    >
                        <Input.Password size="large" placeholder="подтвердите пароль" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item >
                        <Button
                            className='button__large'
                            type='primary'
                            size='large'>
                            зарегистрироваться
                        </Button>
                    </Form.Item>

                    <Link to='/login' className="auth__register-link">войти в аккаунт</Link>

                </Form>

            </Block>
        </>
    )
} 