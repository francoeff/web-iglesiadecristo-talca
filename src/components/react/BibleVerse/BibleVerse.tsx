import { getVerses } from 'src/services/api/bibleVerse';
import styles from './BibleVerse.module.css';
import { isModalOpen, modalChildren } from '@stores/ModalStore';
export const BibleVerse = ({ verse }: { verse: string }) => {
  const handleClick = async () => {
    modalChildren.set(<>Cargando texto...</>);
    isModalOpen.set(true);
    const verseData = (await getVerses(verse)) || '';
    const theObj = { __html: verseData };
    const children = <div dangerouslySetInnerHTML={theObj}></div>;
    modalChildren.set(children);
  };
  return (
    <>
      <span className={styles.bibleVerse} onClick={handleClick}>
        {verse}
      </span>
    </>
  );
};
