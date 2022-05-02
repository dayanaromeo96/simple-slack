import * as React from 'react'
import { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../app/container/Layout/Layout'
import { Login } from '../app/pages/login/Login';
import { LoginContext } from '../shared/context/login.provider'
import { Chat } from '../app/pages/chat/Chat'

function App() {
  const {
    isAuthenticated,
    setIsAuthenticated
  } = React.useContext(LoginContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated])
  return (
    <div className="App">
      <BrowserRouter>
        {!isAuthenticated ? (
          <Login />
        ) :
          <Layout>
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </Layout>
        }

      </BrowserRouter>
    </div>
  );
}

export default App;
