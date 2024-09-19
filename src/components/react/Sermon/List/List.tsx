import { useStore } from '@nanostores/react';
import { ItemList } from './ItemList';
import styles from './List.module.css';
import type { MDXInstance } from 'astro';
import { sermonsFiltered } from '@stores/SermonStore.ts';
import { Pagination } from '@components/react/Pagination';
import { SermonsFilter } from 'src/models/sermons';

export const List = ({
  sermons,
}: {
  sermons: MDXInstance<Record<string, any>>[];
}) => {
  const $sermonsFiltered = useStore(sermonsFiltered);
  const handleChange = (e: any) => {
    const {value} = e.target;
    const filtered = SermonsFilter.filterFromAstro(sermons, value);
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
      </div>
      <div className='sermonList'>
        <Pagination itemsPerPage={3}>
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
