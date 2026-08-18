import React from 'react';
import AuthCard from './components/auth/AuthCard';
import AuthLayout from './components/auth/AuthLayout';

const App = () => {
  return (
      <AuthLayout>
        <AuthCard>
          <h1 className='text-2xl font-bold text-gray-900'>Authentication</h1>
          <p className='mt-2 text-sm text-gray-600'>Login or create an account to continue</p>
        </AuthCard>
      </AuthLayout>
  )
}

export default App;