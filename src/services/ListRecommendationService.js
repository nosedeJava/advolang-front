
import React, { useEffect } from 'react';
import { ListRecommendations } from '../components/recommendationComponent/ListRecommendations';
import { componentDidMountGet } from '../components/Auxiliar/Petitions.js';

export default function ListRecommendationService(props) {

    const [loading, setLoading] = React.useState(false);
    const [recommendations, setRecommendations] = React.useState([]);

    useEffect(() => {
        if (props.main) {
            componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
        } else if (props.saved) {
            componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
        } else if (props.reported) {
            let lang = props.lang;
            componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
        } else if (props.self) {
            componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
        } else if (props.filtered) {
            let categories = props.categories;
            let title = props.title;
            let difficulty = props.difficulty;
            componentDidMountGet(setLoading, setRecommendations, '/api/recommendations');
        } else if (props.lang) {
            componentDidMountGet(setLoading, setRecommendations, '/api/'+props.lang+'/recommendations');
        }
    }, []);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    //se debe hacer el llamado al back para que devuelva las recomendaciones en particular de cada if y asignarlo a recommendationList
    
    return <ListRecommendations recommendations={recommendations} loading={loading} />
}
