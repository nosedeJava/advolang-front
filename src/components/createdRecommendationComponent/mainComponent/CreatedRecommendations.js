import React, { useState, useEffect } from "react";
import "./CreatedRecommendations.css";
import SingleCard from "../singleCard/SingleCard";
import { componentDidMountGet} from '../../../services/Petitions.js';
import ReactLoading from "react-loading";
import RecomPagination from '../../Pagination/RecomPagination';


import {recommendations as recommendations1} from "../../Auxiliar/Data";

export default function CreatedRecommendations(){

  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  const componentDidMount = () => {
    let username = JSON.parse(localStorage.getItem("user")).id;
    componentDidMountGet(setLoading, setRecommendations, '/api/users/'+username+'/recommendations');
  }

  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recommendations.slice(indexOfFirstPost, indexOfLastPost);


  if (loading) {
    return (
      <div style = {{backgroundColor: 'yellow', lineHeight: 2 }}>
        <ReactLoading type="cylon" color="blue" />

      </div>
    );
  }

  return(
    <div className="createdRecomsGeneralContainer">

      <div className="my-recommendations-container">
        <div className="createdRecomsTitle">
          {"My creations"}
        </div>
        <div className="my-recommendations">
          {currentPosts.map((recom, index) => (
            <SingleCard key={index} recommendation={recom}/>
          ))}
        </div>

        <div className="paginationDiv">
          <RecomPagination
            postsPerPage={postsPerPage}
            totalPosts={recommendations.length}
            paginate={paginate}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}
