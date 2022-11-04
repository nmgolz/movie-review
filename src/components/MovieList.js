import React from 'react'
import Movie from './Movie'
import { REVIEWS } from './Reviews.js'

function MovieList() {

  return (
    <div className='container p-0'>
      <Movie 
        Title="Jurassic Park" 
        year='1993' 
        time='2 hrs 6 min' 
        rating='8.2' 
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROh0FLQcvahP12xYXEn9tPONkzW7IQPhINEw&usqp=CAU' 
        review={REVIEWS} 
      />
       <Movie Title="" year='' time='' rating='' image='' review={this}/>

    </div>
  )
}

export default MovieList