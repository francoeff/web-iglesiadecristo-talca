import styles from './List.module.css';
interface Props {
  title: string;
  description: string;
  image: { src: string; alt: string };
  pubDate: string;
  url: string;
  tags: string[];
}

export const ItemList = ({ title, description, image, pubDate, url, tags }: Props) => (
  <a href={url}>
    <div className={styles.itemListSermon}>
      <div className={styles.image}>
        <img
          src={image?.src || '/src/img/sermon-default.jpg'}
          alt={image?.alt || 'Imagen sermón'}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.textTitle}>{title}</h3>
        <p className={styles.textDate}>
          {pubDate} | {tags.join(', ')}
        </p>
        <p className={styles.textDescription}>{description}</p>
      </div>
    </div>
  </a>
);
