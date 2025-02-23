// ImagePopup.js
import React from 'react';
import Modal from 'react-modal';

const ImagePopup = ({ isOpen, onRequestClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Popup"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    border: 'none',
                    background: 'none',
                },
            }}
        >
            <img src={image} alt="Popup" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </Modal>
    );
};

export default ImagePopup;
