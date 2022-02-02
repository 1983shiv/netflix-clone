import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ( {results} ) => {
  return (
      <div className='px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {results.map((result) => (
          <Thumbnail key={result.id} result={result}/>
        ))}
      </div>
    );
};

export default Results;
