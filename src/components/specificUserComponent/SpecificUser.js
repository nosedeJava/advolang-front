import React,  { useState, useEffect } from 'react';
import './SpecificUser.css';
import {useParams} from "react-router-dom";
import { Grid, Box, Avatar} from '@material-ui/core';
import {ListRecommendations} from '../recommendationComponent/ListRecommendations';
import RecomPagination from '../Pagination/RecomPagination';
import {getCurrentRecom, getUserRecommendations} from '../Auxiliar/AuxiliarTools.js';
import ListCategories from '../recommendationComponent/ListCategories';
import {componentDidMountListGet, componentDidMountGetWithAzureAfter, componentDidMountPost, userInfoAzure} from '../../services/Petitions.js';


function SpecificUser(){

  const params = useParams();

  let user_username = params.user;

  const[user, setUser]  = useState({});
  const[userProfile, setUserProfile]  = useState({});

  const[loadingUser, setLoadingUser] = useState(true);

  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const url_petitions_list = [
    {
      url: '/api/users/'+user_username+'/recommendations',
      setConst: setPosts,
      loadingConst: setLoadingPosts
    },
    {
      url: '/api/users/'+ user_username,
      setConst: setUser,
      loadingConst: setLoadingUser
    }
  ]

  const componentDidMount = () => {
    componentDidMountListGet(url_petitions_list);
    userInfoAzure(setLoadingUser, setUser,'/api/users/'+ user_username, setUserProfile)

  }

  useEffect(() => {
    componentDidMount();
    window.scrollTo(0, 0);

  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loadingUser || loadingPosts ) {
    return <h2>Loading...</h2>;
  }

  return (
      <div className="specificUserDiv">
        <Grid container className="specificUserGridContainer">
          <Grid item className="specificProfileItem">
            <Box className="specificProfileBox">
              <Grid container className="specificProfileContainer" spacing={0} direction="column">
                <Grid item className="specificProfileGridImage">
                  <Box className="roundedImageBox" border>
                    <Avatar  alt={user.username} src={userProfile} style={{ height: '100%', width: '100%', backgroundColor: "white" }} />
                  </Box>
                </Grid>

                <Grid item className="specificProfileGridInfo">
                  <Grid container className="specificProfileInfoItemContainer" spacing={0} direction="column">
                    <Grid item className="specificUsernameGrid">
                      <Box className="specificUsernameBox">
                        {user.username}
                      </Box>
                    </Grid>

                    <Grid item className="specificNameGrid">
                      <Box className="specificNameBox">
                        {user.fullname}
                      </Box>
                    </Grid>

                    <Grid item className="specificEmailGrid">
                      <Box  className="specificEmailBox">
                        {user.email}
                      </Box>
                    </Grid>

                    <Grid item className="specificUserDescGrid">
                      <Box className="specificUserDescBox">
                        {"user.description"}
                      </Box>
                    </Grid>

                  </Grid>

                </Grid>

                <Grid item className="specificSuscriptionsGrid">
                  <Box className="specificSuscriptionsBox">
                    <ListCategories content={user.subscriptions} />
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
