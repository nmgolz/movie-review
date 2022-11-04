import React from 'react';

const Review = ({reviews}) => {

    return (
      <div>
          {reviews && reviews.map(review => {
            return(
                  <ul className='list-group border border-danger border-2 mb-1'>
                    <li className='list-group-item text-light bg-dark'><strong>Username:</strong> {review.userName}</li>
                    <li className='list-group-item text-light bg-dark'><strong>Review:</strong> {review.text}</li>
                    <li className='list-group-item text-light bg-dark'><strong>Rating:</strong> {review.rating}</li><br></br>
                    {console.log(review)}
                  </ul>
                )
              }
            )
          }
      </div>
    ) 
}

export default Review