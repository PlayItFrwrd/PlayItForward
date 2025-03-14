import Form from './component/Form';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/submit' exact element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
