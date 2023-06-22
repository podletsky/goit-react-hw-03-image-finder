import { ProgressBar } from 'react-loader-spinner';
import styles from '../loader/Loader.module.css';
const CustomProgressBar = () => {
  return <ProgressBar className={styles.progressBar} />;
};

export default CustomProgressBar;
