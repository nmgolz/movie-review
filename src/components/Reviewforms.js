import React from 'react'
import StarRating from './StarRating'

function Reviewforms() {
  return (
    <div>
        <a>Leave a Review</a>
        <textarea className='form-control mb-2' type='text' rows="4" placeholder='Write a Review Here!'></textarea>
        <StarRating /> 
        <button className='btn btn-light mt-2' type='submit'>Submit</button>
    </div>
  )
}

export default Reviewforms