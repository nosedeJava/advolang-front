import React,  { useState, useEffect } from 'react';
import './SpecificUser.css';
import { Grid, Box, Typography, Button, Avatar, Divider } from '@material-ui/core';
import {ListRecommendations} from '../recommendationComponent/ListRecommendations';
import RecomPagination from '../Pagination/RecomPagination';
import {getCurrentRecom, getUserRecommendations} from '../Auxiliar/AuxiliarTools.js';
import ListCategories from '../recommendationComponent/ListCategories';


function SpecificUser(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  let current_id=localStorage.getItem('recommendation-id');
  let currentRecom = getCurrentRecom(current_id);

  useEffect(() => {
    //Traer datos de la base de datos
    const fetchPosts = async () => {
      const res = getUserRecommendations(currentRecom.creator.id);
      setPosts(res);
    };

    fetchPosts();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="specificUserDiv">
      <Grid container className="specificUserGridContainer">
        <Grid item className="specificProfileItem">
          <Box className="specificProfileBox">
            <Grid container className="specificProfileContainer" spacing={0} direction="column">
              <Grid item className="specificProfileGridImage">
                <Box className="roundedImageBox">
                  <Avatar  alt="Remy Sharp" src={currentRecom.creator.userImage} style={{ height: '100%', width: '100%', backgroundColor: "white" }} />
                </Box>
              </Grid>

              <Grid item className="specificProfileGridInfo">
                <Grid container className="specificProfileInfoItemContainer" spacing={0} direction="column">
                  <Grid item className="specificUsernameGrid">
                    <Box className="specificUsernameBox">
                      {currentRecom.creator.username}
                    </Box>
                  </Grid>

                  <Grid item className="specificNameGrid">
                    <Box className="specificNameBox">
                      {currentRecom.creator.fullname}
                    </Box>
                  </Grid>

                  <Grid item className="specificEmailGrid">
                    <Box  className="specificEmailBox">
                      {currentRecom.creator.email}
                    </Box>
                  </Grid>

                  <Grid item className="specificUserDescGrid">
                    <Box className="specificUserDescBox">
                      {currentRecom.creator.description}
                    </Box>
                  </Grid>

                </Grid>

              </Grid>

              <Grid item className="specificSuscriptionsGrid">
                <Box className="specificSuscriptionsBox">
                  <ListCategories content={currentRecom.creator.subscriptions} />
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

        <Grid item className="specificUserPosts">
          <Box className="specificUserPostsBox">
            <ListRecommendations recommendations={currentPosts}/>
            <div className="paginationPostsDiv">
              <RecomPagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                color="secondary"
              />
            </div>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default SpecificUser;
