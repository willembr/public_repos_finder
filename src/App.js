import logo from './logo.svg';
import styles from './App.module.scss';
import User from './Containers/User/User';


function App() {
  return (
    <div className={styles.App}>
        <h1 className={styles.Title}>Public Repository Finder</h1>
        <User/>
    </div>
  );
}

export default App;
