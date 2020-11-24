
import React, { useEffect } from 'react';
import { ListRecommendations } from '../components/recommendationComponent/ListRecommendations';
import { componentDidMountGet } from './Petitions.js';
import ReactLoading from "react-loading";

export default function ListRecommendationService(props) {

    const [lang, setLang] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [recommendations, setRecommendations] = React.useState([]);


    const mountPetitions = () => {
      if (props.main) {
          componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
      } else if (props.saved) {
          let username = JSON.parse(localStorage.getItem("user")).id;
          componentDidMountGet(setLoading, setRecommendations, '/api/users/'+username+'/saved-recommendations');
      } else if (props.reported) {
          componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
      } else if (props.self) {
          componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
      } else if (props.filtered) {
          let categories = props.categories;
          let title = props.title;
          let difficulty = props.difficulty;
          componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
      } else if (props.lang) {
          componentDidMountGet(setLoading, setRecommendations, '/api/'+props.lang.toLowerCase()+'/recommendations');
      }

    }

    useEffect(() => {
      mountPetitions()

    }, []);

    if(props.lang && props.lang !== lang) {
      setLang(props.lang)
      setLoading(true)
      mountPetitions()
    }


    if (loading) {
      return (
        <div style = {{backgroundColor: 'yellow', lineHeight: 2 }}>
          <ReactLoading type="cylon" color="blue" />

        </div>
      );
    }


    return(
      <div>
        <ListRecommendations recommendations={recommendations} loading={loading} />
    </div>
    );
}
