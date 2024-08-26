import { useStore } from '@nanostores/react';
import styles from './Modal.module.css';
import { isModalOpen, modalChildren } from '@stores/ModalStore';
export const Modal = () => {
  const $modalChildren = useStore(modalChildren);
  const $isModalOpen = useStore(isModalOpen);
  return (
    <div className={`${styles.modal} ${$isModalOpen ? styles.show : ''}`}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={() => isModalOpen.set(false)}
        >
          X
        </button>
        <div className={styles.content}>{$modalChildren}</div>
      </div>
    </div>
  );
};
