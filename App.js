import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? <Login /> :(
        <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
      ) }

      

    </div>
  );
}

export default App;
