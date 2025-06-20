import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployee from './Components/ListEmployee';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div className="container">
      <HeaderComponent/>
      <Routes>
          <Route exact path="/" element={<ListEmployee/>} />
        </Routes>
      <FooterComponent/>
    </div>
    </Router>
    </>
  );
}

export default App;