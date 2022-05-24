import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.decor}>404</span>
      <p className={styles.text}>There's nothing here!😢</p>
    </div>
  );
};

export default PageNotFound;
