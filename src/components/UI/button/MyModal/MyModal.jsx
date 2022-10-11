import React from 'react';

const MyModal = ({children, closeModal}) => {

    return (
        <div className='modal' onClick={ closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div> 
    );
}

export default MyModal;
