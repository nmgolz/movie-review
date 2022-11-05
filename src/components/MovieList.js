import React from 'react'
import Movie from './Movie'


function MovieList() {

  return (
    <div className='container p-0'>
      <Movie 
        Title="Jurassic Park" 
        year='1993' 
        time='2 hrs 6 min' 
        rating='8.2' 
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROh0FLQcvahP12xYXEn9tPONkzW7IQPhINEw&usqp=CAU' 
        
      />
       <Movie 
        Title="Skyfall" 
        year='2012' 
        time='2 hrs 25 min' 
        rating='7.8' 
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0zs3Yt1eNj4EK6fct0IlAqgmnTM2DzB3lGoRj6ROpfTOMN6Hyw23JdB4xkhJxq5wIQ&usqp=CAU' 
        />

    </div>
  )
}

export default MovieList