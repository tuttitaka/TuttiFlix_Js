import tmdb from "./tmdb";
import React, { useEffect, useState } from 'react';
import MovieRow from "./components/MovieRow/MovieRow";
import FeateuredMovie from "./components/FeaturedMovie/feateuredMovie";
import './App.css';
import Header from "./components/Header/Header";




function App() {


  const [moveList, setMovieList] = useState([]);
  const [feateuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);


      let originals = list.filter(i => i.slug === 'originals');
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chose = originals[0].items.results[randomChose];
      let choseInfo = await tmdb.getMovieInfo(chose.id, 'tv');

      setFeaturedData(choseInfo);
    }
    loadAll();
  }, []);


  useEffect(() => {
    const scrollListener=() =>{
        if(window.scrollY > 10) {
          setBlackHeader(true);
        } else{
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll',scrollListener);
    return () =>{
      window.removeEventListener('scroll',scrollListener);
    }
  }, []);




  return (
    <div className="App">
      <Header black={blackHeader} />

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
