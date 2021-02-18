import { BrowserRouter } from 'react-router-dom';
import Main from './Containers/Main/Main';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
