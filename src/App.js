import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Works from './Components/Works';
import Contact from './Components/Contact';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Header/>

        <Routes>
          <Route path='react-site/' element={<HomePage />} />
          <Route path='react-site/works' element={<Works />} />
          <Route path='react-site/contact' element={<Contact />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
