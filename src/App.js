import React, { useEffect } from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from './components/protectedRouteComponent/ProtectedRoute';
import { SignUp } from "./components/signComponent/SignUp";
import PrincipalView from "./components/recommendationComponent/PrincipalView";
import SpecificRecommendation from "./components/specificRecommendationComponent/SpecificRecommendation"
import CreateRecommendation from "./components/createRecomendationComponent/createRecommendation/CreateRecommendation";
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CreateIcon from '@material-ui/icons/Create';
import CreatedRecommendations from "./components/createdRecommendationComponent/mainComponent/CreatedRecommendations";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SavedRecommendations from "./components/savedRecommendations/SavedRecommendations"
import SpecificUser from "./components/specificUserComponent/SpecificUser"
import UpdateUser from "./components/updateUserComponent/Update-User";
import SettingsIcon from '@material-ui/icons/Settings';
import Languages from './components/languageComponent/Languages';
import PrincipalViewLanguage from './components/languageComponent/PrincipalViewLanguage'
import SignIn from "./components/signComponent/SignIn";
import MainPage from "./components/mainPageComponent/MainPage";

export default function App() {

  const PrincipalMainView = () => {
    return <PrincipalView type="main" />
  }

  const routes = [
    {
      path: "/",
      name: "Overview",
      component: PrincipalMainView,
      menuVisible: true,
      menuIcon: () => <HomeIcon />
    },
    {
      path: "/languages",
      name: "Languages",
      component: Languages,
      menuVisible: true,
      menuIcon: () => <LanguageIcon />
    },
    {
      path: "/createRecommendation",
      name: "Add new post",
      component: CreateRecommendation,
      menuVisible: true,
      menuIcon: () => <PostAddIcon />
    },
    {
      path: "/savedRecommendations",
      name: "Saved recommendations",
      component: SavedRecommendations,
      menuVisible: true,
      menuIcon: () => <LibraryBooksIcon />
    },
    {
      path: "/:recomLang/:user/recommendations/:recomid",
      name: "Specific recommendation",
      component: SpecificRecommendation,
      menuVisible: false
    },
    {
      path: "/Created-Recommendations",
      name: "Created recommendations",
      component: CreatedRecommendations,
      menuVisible: true,
      menuIcon: () => <CreateIcon />
    },
    {
      path: "/users/:user",
      name: "Specific User",
      component: SpecificUser,
      menuVisible: false
    },
    {
      path: "/update-user",
      name: "Settings",
      component: UpdateUser,
      menuVisible: true,
      menuIcon: () => <SettingsIcon />
    },
    {
      path: "/:language/recommendations",
      name: "Languages recommendation",
      component: PrincipalViewLanguage,
      menuVisible: false,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const protectedElements = routes.map((route, i) =>
    <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} key={i} />
  );

  return (
    <div>
      <Switch>
        <Route exact path="/mainPage" component={MainPage}/>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {protectedElements}
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>

  );
}
