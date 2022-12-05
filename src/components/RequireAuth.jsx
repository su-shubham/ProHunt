import { useFiefAuth, useFiefIsAuthenticated } from '@fief/fief/react';
import React, { useEffect } from 'react';

const RequireAuth = ({ children }) => {
  const fiefAuth = useFiefAuth();  
  const isAuthenticated = useFiefIsAuthenticated(); 

  useEffect(() => {
    if (!isAuthenticated) {
      fiefAuth.redirectToLogin(`${window.location.protocol}//${window.location.host}/callback`);  
    }
  }, [fiefAuth, isAuthenticated]);

  return (
    <>
      {isAuthenticated && children}
    </>
  );
};

export default RequireAuth;
