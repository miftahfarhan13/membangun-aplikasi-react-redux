import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/Login/LoginForm';
import AccountDetail from '../components/Account/AccountDetail';

function Account() {
  const { authUser = null } = useSelector((states) => states);

  return (
    <>
      <AppLayout>
        {authUser === null && <LoginForm />}
        {authUser !== null && <AccountDetail authUser={authUser} />}
      </AppLayout>
    </>
  );
}

export default Account;
