import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { PostsPage } from './pages/PostsPage';
import './App.css';
import { AboutMePage } from './pages/AboutMePage';
import { Menu } from './components/Menu';


function App() {

  return (
    <Router>
      <Menu/>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
