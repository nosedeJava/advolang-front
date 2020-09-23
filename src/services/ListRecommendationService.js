
import React, { Component } from 'react';
import { ListRecommendations } from '../components/recommendationComponent/ListRecommendations';
import { recommendations } from '../components/Auxiliar/Data.js';

export default function ListRecommendationService(props) {
    let recommendationList = [];
    //se debe hacer el llamado al back para que devuelva las recomendaciones en particular de cada if y asignarlo a recommendationList
    if (props.main) {
        recommendationList = recommendations;
    } else if (props.saved) {
        recommendationList = recommendations;
    } else if (props.reported) {
        let lang = props.lang;
        recommendationList = recommendations;
    } else if (props.self) {
        let user = localStorage.getItem('username')
        recommendationList = recommendations;
    } else if (props.filtered) {
        let categories = props.categories;
        let title = props.title;
        let difficulty = props.difficulty;
        console.log(categories)
        console.log(title)
        console.log(difficulty)
        recommendationList = recommendations;
    } else if (props.lang) {
        console.log(props.lang)
        recommendationList = recommendations;
    }
    return <ListRecommendations recommendations={recommendationList} />
}
