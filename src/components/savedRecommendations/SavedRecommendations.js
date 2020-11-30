import React, { useState, useEffect } from "react";
import './SavedRecommendations.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import ReactLoading from "react-loading";
import {SavedRecommendationsList} from './SavedRecommendationsList';
import RecomPagination from '../Pagination/RecomPagination';

function SavedRecommendations (props){

  const [loading, setLoading] = useState(true);
  const [savedRecommendations, setSavedRecommendations] = useState([]);

  const componentDidMount = () => {
    let username = JSON.parse(localStorage.getItem("user")).id;
    componentDidMountGet(setLoading, setSavedRecommendations, '/api/users/'+username+'/saved-recommendations');
  }


  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = savedRecommendations.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return (
      <div style = {{backgroundColor: 'yellow', lineHeight: 2 }}>
        <ReactLoading type="cylon" color="blue" />

      </div>
    );
  }


  return (
    <div className="savedRecommendationsContainer" >
      <div className="savedRecomsTitle">
        {"My recommendations"}
      </div>
      <div className="savedRecommendationsDiv">
        <SavedRecommendationsList savedRecoms={currentPosts} />

        <div className="paginationDiv">
          <RecomPagination
            postsPerPage={postsPerPage}
            totalPosts={savedRecommendations.length}
            paginate={paginate}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default SavedRecommendations;
