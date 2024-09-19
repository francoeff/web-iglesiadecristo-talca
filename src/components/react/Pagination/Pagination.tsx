import { Children, useEffect, useState } from 'react';
import styles from './Pagination.module.css';

interface Props {
  children: React.ReactNode;
  itemsPerPage: number;
}
export const Pagination = ({ children, itemsPerPage }: Props) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const arrayChildren = Children.toArray(children);

  if (!children) return null;

  const indexEnd = itemsPerPage * currentPage;
  const indexStart = indexEnd - itemsPerPage;
  const maxPages = Math.ceil(arrayChildren.length / itemsPerPage);

  useEffect(() => {
    setItems(arrayChildren.slice(indexStart, indexEnd));
  }, [currentPage, children]);

  return (
    <>
      {items}
      <div className={styles.buttons}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: maxPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            disabled={currentPage === i + 1}
            className={currentPage === i + 1 ? styles.active : ''}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPages}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
