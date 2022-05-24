import Container from 'components/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <a href="https://github.com/zpengineer">Develop by Oleh Fedorov</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
