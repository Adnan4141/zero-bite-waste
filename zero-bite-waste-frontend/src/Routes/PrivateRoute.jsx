import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../api/contextApi/ContextAPi';



const PrivateRoute = ({ element }) => {
    const {user} = useUser();
    
  if (user) {
    return element;
  } else 
  {
    return <Navigate to="/signin" replace />;
  }
};

export default PrivateRoute;
