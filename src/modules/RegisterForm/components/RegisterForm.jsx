import React from 'react';
import {Link} from 'react-router-dom';
import {Block, Button} from "../../../components";
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';


export const RegisterForm = (props) => {
    debugger

    const success = true

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <div>

            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат нужно зарегистрироватсья</p>
            </div>
            <Block>
                {success
                    ?

                    <Form onSubmit={handleSubmit}>

                        <Form.Item
                            name="email"
                            validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
                            hasFeedback
                            help={!touched.email ? "" : errors.email}
                        >
                            <Input
                                id='email'
                                size="large"
                                placeholder="почта"
                                prefix={<MailOutlined/>}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="login"
                        >
                            <Input size="large" placeholder="логин" prefix={<UserOutlined/>} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                            hasFeedback
                            help={!touched.password ? "" : errors.password}
                        >
                            <Input.Password
                                id='password'
                                size="large"
                                placeholder="пароль"
                                prefix={<LockOutlined/>}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmpassword"
                        >
                            <Input.Password

                                size="large"
                                placeholder="подтвердите пароль"
                                prefix={<LockOutlined/>}

                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className='button__large'
                                onClick={handleSubmit}
                                type='primary'
                                size='large'
                                disabled={isSubmitting}
                            >
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