import React from 'react';
import AuthCard from './components/auth/AuthCard';
import AuthLayout from './components/auth/AuthLayout';
import Login from './components/pages/Login';

const App = () => {
  return (
      <AuthLayout>
        <AuthCard>
          <Login />
        </AuthCard>
      </AuthLayout>
  )
}

export default App;