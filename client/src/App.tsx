
import React from 'react';
import MainLayout from './components/templates/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import Modules from './components/templates/Modules';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/modules" element={<Modules />} />

        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
