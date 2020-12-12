import React from 'react';
import { Link } from 'react-router-dom'

export const LoginForm = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Войдите в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form>
                    <Form.Item
                        name="login"
                    >
                        <Input size="large" placeholder="логин" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                    >
                        <Input.Password size="large" placeholder="пароль" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item >
                        <Button
                            className='button__large'
                            type='primary'
                            size='large'>
                            войти в аккаунт
                        </Button>
                    </Form.Item>

                    <Link to='/register' className="auth__register-link">Зарегистрироваться</Link>

                </Form>

            </Block>

        </>


    )
} 