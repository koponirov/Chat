import React from 'react';
import {Block, Button} from "../../components";
import './Auth.scss'

const Auth = () => (
    <section className='auth'>
        <div className='auth__content'>
            <div className="auth__top">
                <h2>Войдите в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Button className='button__large' type='primary' size='large'>click</Button>
            </Block>
        </div>

    </section>
);


export default Auth;