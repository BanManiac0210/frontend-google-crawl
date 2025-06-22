import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './page/SearchPage/SearchPage';
import ResultPage from './page/ResultPage/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
