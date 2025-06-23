import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployee from './Components/ListEmployee';
import Login from './Components/Login';
import CreateOrUpdateDeveloper from './Components/CreateOrUpdateDeveloper';
import Viewdeveloper from './Components/ViewDeveloper';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('token');
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="container">
      {!isLoginPage && <HeaderComponent />}
      
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <ListEmployee /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-developer/:id"
          element={isLoggedIn ? <CreateOrUpdateDeveloper /> : <Navigate to="/login" />}
        />
        <Route
          path="/view-developer/:id"
          element={isLoggedIn ? <Viewdeveloper /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!isLoginPage && <FooterComponent />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
