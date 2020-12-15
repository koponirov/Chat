import React from 'react';
import {Link} from 'react-router-dom';
import {Block, Button} from "../../../components";
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';


export const RegisterForm = () => {

    const success = true

    return (
        <div>

            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат нужно зарегистрироватсья</p>
            </div>
            <Block>
                {success
                    ?
                    <Form>
                        <Form.Item
                            name="login"
                        >
                            <Input size="large" placeholder="логин" prefix={<UserOutlined/>}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                        >
                            <Input size="large" placeholder="почта" prefix={<MailOutlined/>}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                        >
                            <Input.Password size="large" placeholder="пароль" prefix={<LockOutlined/>}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                        >
                            <Input.Password size="large" placeholder="подтвердите пароль" prefix={<LockOutlined/>}/>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className='button__large'
                                type='primary'
                                size='large'>
                                зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link to='/login' className="auth__register-link">войти в аккаунт</Link>
                    </Form>

                    : <div className='auth__success-block'>
                        <InfoCircleTwoTone style={{fontSize : '48px'}} />
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправлено письмо со ссылкой на подтверждение аккаунта</p>
                    </div>
                }
            </Block>
        </div>
    )
} 