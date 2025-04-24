import React from 'react';

const volunteerMarquee = ({review}) => {
    return (
        <div className='shadow-lg shadow-cyan-500/50 m-2 rounded-lg'>
            <div className=" w-72 md:w-72 glass m-5">
          <figure className='flex justify-center'><img src={review.img} alt="user" className='rounded-full w-1/2 my-3 ring ring-cyan ring-offset-base-500 ring-offset-2'/></figure>
          <div className="card-body text-center">
            {/* <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vita & {review.description}</p> */}
            <div className="divider"></div>
            <h2 className="mx-auto font-semibold text-white text-2xl">{review.name}</h2>
          </div>
        </div>
        </div>
    );
};

export default volunteerMarquee;