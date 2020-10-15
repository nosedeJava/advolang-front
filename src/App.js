import React, { useEffect } from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProtectedRoute} from './components/protectedRouteComponent/ProtectedRoute';
import {SignIn} from "./components/signComponent/SignIn";
import {SignUp} from "./components/signComponent/SignUp";
import PrincipalView from "./components/recommendationComponent/PrincipalView";
import SpecificRecommendation from "./components/specificRecommendationComponent/SpecificRecommendation"
import CreateRecommendation from "./components/createRecomendationComponent/createRecommendation/CreateRecommendation";
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CreatedRecommendations from "./components/createdRecommendationComponent/mainComponent/CreatedRecommendations";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SavedRecommendations from "./components/savedRecommendations/SavedRecommendations"
import SpecificUser from "./components/specificUserComponent/SpecificUser"
import UpdateUser from "./components/updateUserComponent/Update-User";
import {AccountCircle} from "@material-ui/icons";


export default function App() {

  const PrincipalMainView = () => {
    return <PrincipalView type="main"/>
  }

  const routes = [
    {
      path: "/",
      name: "Overview",
      component: PrincipalMainView,
      menuVisible: true,
      menuIcon: () => <HomeIcon/>
    }, {
      path: "/savedRecommendations",
      name: "My recommendations",
      component: SavedRecommendations,
      menuVisible: true,
      menuIcon: () => <LibraryBooksIcon/>
    }, {
      path: "/createRecommendation",
      name: "Add new post",
      component: CreateRecommendation,
      menuVisible: true,
      menuIcon: () => <PostAddIcon/>
    },
    {
      path: "/specific-recommendation",
      name: "Specific recommendation",
      component: SpecificRecommendation,
      menuVisible: false
    },
    {
      path: "/Created-Recommendations",
      name: "Created recommendations",
      component: CreatedRecommendations,
      menuVisible: true,
      menuIcon:() => <HomeIcon />
    },
    {
      path: "/specific-user",
      name: "Specific User",
      component: SpecificUser,
      menuVisible: false
    },
    {
      path: "/update-user",
      name: "Update information",
      component: UpdateUser,
      menuVisible: true,
      menuIcon: () => <AccountCircle/>
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const protectedElements = routes.map((route, i) =>
      <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} key={i}/>
  );

  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/login" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            {protectedElements}
            <Route path="*" component={() => "404 NOT FOUND"}/>
          </Switch>
        </div>
      </BrowserRouter>

  );
}
