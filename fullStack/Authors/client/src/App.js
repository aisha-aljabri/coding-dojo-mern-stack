
import { Router } from '@reach/router';
import Main from './views/main.js'
import Detail from './views/Detail'
import Update from './views/Update'
import Addauthor from './views/Addauthor'

function App() {
  return (
    <div className="App">

      <Router>
          <Main path="/" />
          <Addauthor path="/new" />
          <Detail path="/api/products/:id" />
          <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
