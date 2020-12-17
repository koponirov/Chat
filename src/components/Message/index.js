import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import readedSvg from '../../assets/icons/readed.svg'
import notReadedSvg from '../../assets/icons/not-readed.svg'

import './Message.scss'

const Message = ({avatar, text, date, isMe, user, isReaded, attachments}) => {
    return (
        <div className={classNames("message", {"message--isme": isMe})}>
            <div className="message__content">
                {isMe && isReaded ? (
                    <img
                        className="message__icon-readed"
                        src={readedSvg}
                        alt="readed icon"/>
                ) : (
                    <img
                        className="message__icon-readed"
                        src={notReadedSvg}
                        alt="not readed icon"/>
                )}

                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">

                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {
                            attachments && attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))
                        }
                    </div>
                    <span className="message__date">
                        {formatDistanceToNow(date, {addSuffix: true})}
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
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
}

export default Message;
