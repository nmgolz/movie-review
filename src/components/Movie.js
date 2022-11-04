import React from 'react'
import Review from './Review'
import Reviewforms from './Reviewforms'


function Movie({Title, year, time, rating, image, }) {
  return (

         <div className='card bg-dark text-light'>
            <div className='card-header row mx-0'>
                <h4>{Title}</h4>
            </div>
            <div className='row card-body'>
                <div className='col-sm'>
                    <div className='row'>
                        <div className='col'>
                            <img className='w-100' src={image}></img>
                        </div>
                        <div className='col'>                      
                            <span>Released: {year}</span><br></br>
                            <span>Run time: {time}</span><br></br>
                            <span>Imdb rating: {rating}</span>
                        </div>
                    </div>
   
                </div>
                <div className='col-md'>
                    <Review />
                </div>
                <div className='col-sm'>
                    <Reviewforms />
                </div>
            </div>
         </div>
  )
}

export default Movie