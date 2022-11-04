import React, {useState} from 'react'
import StarRating from './StarRating'
import {REVIEWS} from './Reviews'


function Reviewforms() {

    const[submit, setSubmit] = useState(null);

    function submitReview (){
        setSubmit(current => [...current, {userName: ('#new-review').value}  ]

            )
        }      
        


  return (
    <div>
        <a>Leave a Review</a>
        <textarea id='new-review' className='form-control mb-2' type='text' rows="4" placeholder='Write a Review Here!'></textarea>
        <StarRating /> 
        <button className='btn btn-light mt-2' type='submit'>Submit</button>
    </div>
  )
}

export default Reviewforms