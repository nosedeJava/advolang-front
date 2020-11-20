import React from 'react';
import ListRecommendationService from "../../services/ListRecommendationService"
import FilterSection from "./FilterSection"
import './PrincipalView.css';
import SpecificLanguage from '../languageComponent/SpecificLanguage';

export default function PrincipalView(props) {
    const [viewType, setViewType] = React.useState(props.type);
    const [lang, setLang] = React.useState(props.language?props.language:"none");
    const [title, setTitle] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    const [type, setType] = React.useState(props.type);

    const changeViewType = (newType) => {
        setViewType(newType)
    }
    const changeLang = (newLang) => {
        setLang(newLang)
    }
    const changeTofilterView = (title, difficulty, categories) => {
        setTitle(title);
        setDifficulty(difficulty);
        setCategories(categories);
        changeViewType("filtered");
    }
    const FilterView = () => {
        return <ListRecommendationService filtered title={title} difficulty={difficulty} categories={categories} type={type}/>
    }

    return (
        <div className="mainDiv" >
            {viewType === "lang" && <SpecificLanguage language={lang} />}
            <FilterSection renderFilterFunction={changeTofilterView} lang={lang}/>
            {viewType === "main" && <ListRecommendationService main />}
            {viewType === "saved" && <ListRecommendationService saved />}
            {viewType === "reported" && <ListRecommendationService reported />}
            {viewType === "self" && <ListRecommendationService self />}
            {viewType === "filtered" && FilterView()}
            {viewType === "lang" && <ListRecommendationService lang={lang} />}
        </div>
    );
}