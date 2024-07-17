import tmdb from "./tmdb";
import React, { useEffect } from 'react';




function App() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list)
    }

    loadAll();
  }, []);




  return (
    <div className="App">
    </div>
  );
}

export default App;
