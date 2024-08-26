import { useStore } from '@nanostores/react';
import styles from './Modal.module.css';
import { isModalOpen, modalChildren } from '@stores/ModalStore';
export const Modal = () => {
  const $modalChildren = useStore(modalChildren);
  const $isModalOpen = useStore(isModalOpen);
  const closeModal = () => isModalOpen.set(false);
  return (
    <div className={`${styles.modal} ${$isModalOpen ? styles.show : ''}`} onClick={closeModal}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={closeModal}
        >
          X
        </button>
        <div className={styles.content}>{$modalChildren}</div>
      </div>
    </div>
  );
};
