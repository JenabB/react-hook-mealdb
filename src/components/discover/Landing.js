import React from 'react';
import Select from 'react-select';

const Landing = () => {
  const option = [{ value: 'ini value', name: 'ini name' }];

  return (
    <div>
      <h1>Discover</h1>
      <Select options={option} />
    </div>
  );
};

export default Landing;
