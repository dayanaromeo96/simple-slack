import * as React from 'react'

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../app/container/Layout/Layout'
import { Login } from '../app/pages/login/Login';
import { LoginContext } from '../shared/context/login.provider'
import { Chat } from '../app/pages/chat/Chat'

function App() {
  const {
    isAuthenticated
  } = React.useContext(LoginContext);

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
