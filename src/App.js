import React from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProtectedRoute} from './components/menu/authentication/ProtectedRoute';
import {CreateRecommendation} from "./components/createRecomendation/CreateRecommendation";
import {SignIn} from "./components/menu/authentication/SignIn";
import {SignUp} from "./components/menu/authentication/SignUp";
import PrincipalView from "./components/PrincipalView";
import SpecificRecommendation from "./components/specificRecommendation/SpecificRecommendation"


const testInfo= {
  title: "Las crónicas de Narnia: El león, la bruja y el ropero",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum velit dui, in vehicula mi accumsan id. Suspendisse potenti. Duis id cursus velit. Praesent dapibus arcu eu dolor aliquet euismod. Sed congue nunc vehicula est molestie, a egestas lacus congue. Quisque finibus cursus justo, et scelerisque nibh. Suspendisse eget orci sit amet massa vehicula dictum. Curabitur et erat nunc. Vestibulum leo orci, dapibus eu finibus eget, ultrices non lectus. Etiam eu congue mi. Phasellus accumsan nisl vel vehicula tincidunt. Curabitur rhoncus arcu sed facilisis porttitor. Etiam tortor nisi, dictum ornare lorem id, ornare vulputate augue. Fusce tincidunt nibh ut mollis tempus. Quisque euismod, turpis ut mattis mollis, est nisi accumsan ex, ac elementum est erat id velit. Integer non nunc sed felis volutpat hendrerit id ac nisi.",
  sourceImage:"/img/test.png",
  score: "0.1",
  link: "https://youtu.be/dQw4w9WgXcQ",
  author: {
    username: "Stinky",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImg: "/img/profile_image.jpg"
  },
  categories: ["gameplay","gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"],
  postDate: Date.parse("September 8, 2020, 00:00:00 UTC")
}

export default function App(props) {

  // useEffect(() => {
  //   setStorageValues()
  // });

  // function setStorageValues() {
  //   localStorage.setItem("name", "Anónimos");
  //   localStorage.setItem("email", "an@mail.com");
  //   localStorage.setItem("passwd", "anonimo");
  // }

  const routes = [
    {
      path: "/",
      name: "Principal view",
      component: PrincipalView
    },
    {
      path: "/createRecommendation",
      name: "Crear recomendación",
      component: CreateRecommendation
    },
    {
      path:"/specific-recommendation",
      name: "Specific recommendation",
      component: SpecificRecommendation
    },
  ];

  const protectedElements=routes.map((route, i) =>
    <ProtectedRoute exact path={route.path} component={route.component} menuList={routes} />
  );


  return (
    <BrowserRouter >
      <div>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          {protectedElements}
          <Route path="*" component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
    </BrowserRouter >

  );
}
