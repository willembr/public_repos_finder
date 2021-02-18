import logo from './logo.svg';
import styles from './App.module.scss';
import User from './Containers/User/User';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <h1 className={styles.Title}>Public Repository Finder</h1>
        <User/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
