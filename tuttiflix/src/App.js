import tmdb from "./tmdb";
import React, { useEffect, useState } from 'react';
import MovieRow from "./components/MovieRow/MovieRow";
import FeateuredMovie from "./components/FeaturedMovie/feateuredMovie";




function App() {


  const [moveList, setMovieList] = useState([]);
  const [feateuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);


      let originals = list.filter(i => i.slug === 'originals');
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chose = originals[0].items.results[randomChose];

      let chosenInfo = await tmdb.getMoviInfo(chose.id, 'tv')
    }
    loadAll();
  }, []);




  return (
    <div className="App">

      {feateuredData &&
        <FeateuredMovie item={feateuredData} />
      }

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
