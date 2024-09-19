import { useStore } from '@nanostores/react';
import { ItemList } from './ItemList';
import styles from './List.module.css';
import type { MDXInstance } from 'astro';
import { sermonsFiltered } from '@stores/SermonStore.ts';
import { Pagination } from '@components/react/Pagination';
import { PublicationsFilter } from 'src/models/publications';
import { useState } from 'react';

export const List = ({
  sermons,
}: {
  sermons: MDXInstance<Record<string, any>>[];
}) => {
  const $sermonsFiltered = useStore(sermonsFiltered);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChange = (e: any) => {
    const { value } = e.target;
    const filtered = PublicationsFilter.filterFromAstro(sermons, value);
    sermonsFiltered.set(filtered);
  };

  const sermonsToShow =
    $sermonsFiltered.length > 0 ? $sermonsFiltered : sermons;

  return (
    <>
      <div className={styles.sermonFilter}>
        <input
          className={styles.inputText}
          type='text'
          placeholder='Buscar sermones'
          onChange={handleChange}
        />

        <select
          className={styles.selectItems}
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          value={itemsPerPage}
        >
          <option value=''>Items por página</option>
          <option value='3'>3</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
        </select>
      </div>
      <div className='sermonList'>
        <Pagination itemsPerPage={itemsPerPage}>
          {sermonsToShow.map(
            ({
              url,
              frontmatter: { title, description, image, pubDate, tags },
            }) => (
              <ItemList
                key={url}
                title={title}
                description={description}
                image={image}
                pubDate={pubDate}
                url={url as string}
                tags={tags}
              />
            )
          )}
        </Pagination>
      </div>
    </>
  );
};
