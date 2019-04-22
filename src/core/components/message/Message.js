import React from 'react';

const Message = ({
    type = 'error',
    message = '',
    _class = '',
    showCloseBtn = false,
    closeBtnAriaLabel = 'Close this message'
}) => {
    return (
        <div className={`message message--${type} ${_class}`}>
            <p className="message-content" dangerouslySetInnerHTML={{ __html: message }} />
            {showCloseBtn && <button type="button" className="btn btn__close" aria-label={closeBtnAriaLabel} />}
        </div>
    );
};

export default Message;
