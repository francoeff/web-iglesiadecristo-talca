import { useStore } from '@nanostores/react';
import { ItemList } from './ItemList';
import styles from './List.module.css';
import type { MDXInstance } from 'astro';
import { sermonsFiltered } from '@stores/SermonStore.ts';

export const List = ({
  sermons,
}: {
  sermons: MDXInstance<Record<string, any>>[];
}) => {
  const $sermonsFiltered = useStore(sermonsFiltered);
  const handleChange = (e: any) => {
    const value = e.target.value;
    const filtered = sermons.filter((sermon) =>
      sermon.frontmatter.title.toLowerCase().includes(value.toLowerCase()) ||
      sermon.frontmatter.description.toLowerCase().includes(value.toLowerCase())
    );
    sermonsFiltered.set(filtered);
  };

  const sermonsToShow = $sermonsFiltered.length > 0 ? $sermonsFiltered : sermons;

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
      </div>
    </>
  );
};
