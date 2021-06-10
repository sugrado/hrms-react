import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container style={{marginTop:"6em"}}>
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
