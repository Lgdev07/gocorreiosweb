import { useState } from 'react';

import styles from './Modal.module.css'

interface ModalProps {
    message?: string
}

const Modal: React.FC<ModalProps> = ({ message }) => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
    <>
        { showModal &&
        <div className={`${styles.modal} ${!showModal && styles.fadeout}`} id="modal">
            <div className={styles.modal_content}>
                <h2 className={styles.modal_title}>Atenção</h2>
                    <p>{message}</p>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </div>
        }
    </>

  )
}

export default Modal;
