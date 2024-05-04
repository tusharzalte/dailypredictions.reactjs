import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }

  return (
    <div>
      <ul>
        <li><button onClick={() => navigateTo('/Dashboard')}>Dashboard</button></li>
        <li><button onClick={() => navigateTo('/model-info')}>Model-info</button></li>
      </ul>
    </div>
  );
};

export default Navigation;
