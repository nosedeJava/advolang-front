import React,  { useState, useEffect } from 'react';
import './SavedRecommendations.css';
import {recommendations} from '../Auxiliar/Data.js';
import RecomPagination from './RecomPagination';
import {ListRecommendations} from '../recommendationComponent/ListRecommendations';


function SavedRecommendations (props){

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    //Traer datos de la base de datos
    const fetchPosts = async () => {
      const res = recommendations;
      setPosts(res);
    };

    fetchPosts();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="mainDiv" >
      <div className='container mt-5'>
        <ListRecommendations recommendations={currentPosts}/>
        <RecomPagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );

}

export default SavedRecommendations;
