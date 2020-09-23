import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const RecomPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const handleClick = (event, value)=>{
    paginate(value)
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <Pagination count={pageNumbers.length} color="secondary" onChange={handleClick}/>
      </div>
    </div>

  );
};

export default RecomPagination;
