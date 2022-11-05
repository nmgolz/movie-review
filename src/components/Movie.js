import React, {useState} from 'react'

import StarRating from './StarRating'



function Movie({Title, year, time, rating, image,}) {

    const [submit, setSubmit]= useState([])

    const addReview = () => {
        console.log(submit);
        setSubmit([...submit, {
                                userName: `RandomUser${Math.floor(Math.random() * 900)}`,
                                text: `${document.getElementById('new-review').value}`,
                                rating: `${document.getElementById('star').innerHTML} star`,
                                id: Math.floor(Math.random() * 1000)
                            }
      ])

    }
    


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
                        <ul className='list-group border border-danger border-2 mb-1'>
                            <li className='list-group-item text-light bg-dark'><strong>Username:</strong>Chrisp Ratt</li>
                            <li className='list-group-item text-light bg-dark'><strong>Review:</strong> I loved this Movie I hope to star in something just like it!</li>
                            <li className='list-group-item text-light bg-dark'><strong>Rating:</strong> 5 stars!</li><br></br>
                        </ul>
                        {submit && submit.map(submit => {
                    return(
                        <ul className='list-group border border-danger border-2 mb-1'>
                            {console.log(submit)}
                            <li className='list-group-item text-light bg-dark'><strong>Username:</strong> {submit.userName}</li>
                            <li className='list-group-item text-light bg-dark'><strong>Review:</strong> {submit.text}</li>
                            <li className='list-group-item text-light bg-dark'><strong>Rating:</strong> {submit.rating}</li><br></br>
                        </ul>
                        )
                        }
                    )
                }
                </div>
                <div className='col-sm'>
                    <a>Leave a Review</a>
                    <textarea id='new-review' className='form-control mb-2' type='text' rows="4" placeholder='Write a Review Here!'></textarea>
                    <StarRating /> 
                    <button onClick={addReview} className='btn btn-light mt-2' type='submit'>Submit</button>
                </div>
            </div>
         </div>
  )
}

export default Movie