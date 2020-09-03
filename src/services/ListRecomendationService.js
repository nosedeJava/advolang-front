import React from 'react';
import { ListRecommendations } from '../components/ListRecommendations';

export class ListRecommendationService extends React.Component {
    render() {
        const recommendations = [{ title: "The last samurai analysis on YouTube", score: "4.2", sourceImage: "youtube.png", level: "Beginner", user: "urobs", time: "posted 6 hours ago", categories: ["youtube", "analysis", "movie", "japan"] },
        { title: "Gameplay FFVII remake GPB no-sub", score: "4.8", sourceImage: "youtube.png", level: "Beginner", user: "Stinky", time: "posted 1 day ago", categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"] },
        { title: "The last samurai analysis on YouTube", score: "3.2", sourceImage: "youtube.png", level: "Beginner", user: "urobs", time: "posted 6 hours ago", categories: ["youtube", "analysis", "movie", "japan"] },
        { title: "Gameplay FFVII remake GPB no-sub", score: "2.0", sourceImage: "youtube.png", level: "Beginner", user: "Stinky", time: "posted 1 day ago", categories: ["gameplay", "videogame", "FFVII", "GPB", "gameplay", "videogame", "FFVII", "GPB"] }]
        return <ListRecommendations recommendationList={recommendations} />
    }
}