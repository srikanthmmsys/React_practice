import React, { useCallback, useEffect, useState } from 'react'
import ComponentA from './ComponentA'

const App = () => {
   const[movies,setMovies]=useState([{}]);
   const [loading,setLoading]=useState(false) 



const  onclickHandeller =useCallback(async()=>{
setLoading(true)
 const response=await fetch("https://swapi.dev/api/films")
  const data=await response.json();

    const transformedmovies=  data.results.map(moviedata=>{
      return {
        id:moviedata.episode_id,
        title:moviedata.title,
        openingText:moviedata.opening_crawl,
        releaseDate:moviedata.release_date

      };
  })
    setMovies(transformedmovies);
setLoading(false)
  },[])

  useEffect(()=>{
    onclickHandeller();
  },[onclickHandeller])
  return (
    <div>
      <button onClick={onclickHandeller}>button</button>
      {!loading && movies.length > 0&& <ComponentA movies={movies}/>}
      {movies.length===0 && <p>no movies found</p>}
      {loading && <p>loading............</p>}
    </div>
  )
}

export default App
