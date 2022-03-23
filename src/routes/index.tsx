import React from 'react';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import Loading from '../components/Loading';
import {Base} from '../components';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  // eslint-disable-next-line curly
  if (loading) return <Loading size="small" color="#f00" />;

  return signed ? (
    <Base>
      <AppRoutes />
    </Base>
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
