import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import checkedSvg from '../../assets/icons/checked.svg'

import './Message.scss'

const Message = ({avatar, text, date, isMe, user, isReaded }) => {
    return (
        <div className={classNames("message", {"message--isme":isMe })}>
            <div className="message__content">
                {isMe && isReaded && (
                    <img
                        className="message__icon-readed"
                        src={checkedSvg}
                        alt="checked icon" />
                )

                }

                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <span className="message__date">
                        {formatDistanceToNow(date, { addSuffix: true })}
                    </span>

                </div>
            </div>

        </div>
    )
}

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
}

export default Message;
