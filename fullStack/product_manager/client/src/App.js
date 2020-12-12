import './App.css';
import { Router } from '@reach/router';
import Main from './views/main.js'
import Detail from './views/Detail'
import Update from './views/Update'

function App() {

  return (
    <div className="App">

      <Router>
          <Main path="/api/products/" />
          <Detail path="/api/products/:id" />
          <Update path="/api/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
