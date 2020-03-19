import React from 'react';

// import '../../assets/css/Food.css';

const Food = () => {
  const APP_ID = '8debb3e4';
  const APP_KEY = 'c9c2a9ac54a69f6c10f4abd97dcf8e4a';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="Food">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Food;
