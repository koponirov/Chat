import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton} from 'antd'
import classNames from 'classnames'

import './Message.scss'

const Message = ({avatar, text, date }) => {
    return (
        <div className='message'>
            <div className='message__avatar'>
                <img src={avatar} alt='User avatar'/>

            </div>
        </div>
    )
}

Message.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string
}

export default Message;
