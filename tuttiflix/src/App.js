import tmdb from "./tmdb";
import React, { useEffect, useState } from 'react';
import MovieRow from "./components/MovieRow/MovieRow";




function App() {


  const [moveList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);




  return (
    <div className="App">
      <section className="lists">
          {moveList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
      </section>
    </div>
  );
}

export default App;
