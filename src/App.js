import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Route basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Route>
  );
}

export default App;
