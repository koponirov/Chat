import React from 'react';


import './Home.scss'
import Message from "../../components/Message";



const Home = () => (
    <section className='home'>
        <Message
            avatar='https://sun4-17.userapi.com/impg/lwpDTTfQhgyydEp-9LdFHElFpG_CWPL0EbvNHg/pr93lesNDqA.jpg?size=100x0&quality=96&crop=142,0,717,717&sign=2e71adb148b61e1c417c68a8eaa744af&ava=1'
            text='Привет! Вот мое сообщение для тебя!'
            date={new Date}
            isMe={true}
            isReaded={true}
        />
        <Message
            avatar='https://sun4-10.userapi.com/impf/c830408/v830408279/146eb8/NBu4Zr9cByg.jpg?size=100x0&quality=96&crop=65,0,587,587&sign=910f381d499697417b53c055514a1033&ava=1'
            text='Привет, сообщение как сообщение'
            date={new Date}
        />

    </section>
);


export default Home;