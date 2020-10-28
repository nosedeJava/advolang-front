import React,  { useState, useEffect } from 'react';
import './SavedRecommendations.css';
import {savedRecommendationsList} from '../Auxiliar/Data.js';
import RecomPagination from '../Pagination/RecomPagination';
import {ListRecommendations} from '../recommendationComponent/ListRecommendations';

function SavedRecommendations (props){

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    //Traer datos de la base de datos
    const fetchPosts = async () => {
      const res = savedRecommendationsList;
      setPosts(res);
    };
    fetchPosts();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
      <div className="savedRecommendationsContainer" >
        <div className="savedRecommendationsDiv">
          <ListRecommendations recommendations={currentPosts}/>
          <div className="paginationDiv">
            <RecomPagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                color="primary"
            />
          </div>
        </div>
      </div>
  );
}

export default SavedRecommendations;
