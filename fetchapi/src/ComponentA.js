import React from 'react'

const ComponentA = (props) => {
  
  
    return (
    <div>
{props.movies.map((movie)=>
            <li>
                <h2>{movie.title}</h2>
                <h3>{movie.releaseDate}</h3>
                <p>{movie.openingText}</p>
            </li>
      )}
    </div>
  )
}

export default ComponentA
