import React from 'react';

const Food = () => {
  const APP_ID = '8debb3e4';
  const APP_KEY = 'c9c2a9ac54a69f6c10f4abd97dcf8e4a';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="Food">
      <h1>Hello Food</h1>
    </div>
  );
};

export default Food;
