import React from 'react';
import ListRecommendationService from "../../services/ListRecommendationService"
import FilterSection from "./FilterSection"
import './PrincipalView.css';
import SpecificLanguage from '../languageComponent/SpecificLanguage';
import {SponsorRecom} from './Sponsor';
import { Grid, Box, Card, CardMedia, Typography, ButtonBase} from '@material-ui/core';

export default function PrincipalView(props) {
    const [viewType, setViewType] = React.useState(props.type);
    const [lang, setLang] = React.useState(props.language?props.language:"none");
    const [title, setTitle] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [categories, setCategories] = React.useState([]);

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
        return <ListRecommendationService filtered title={title} difficulty={difficulty} categories={categories} />
    }

    return (
      <Grid container className="mainDiv" spacing={0} padding={0} direction="row">

        <Grid item className="sponsorSectionItem">

          <div className="sponsorSectionDiv">
            <SponsorRecom />

          </div>
        </Grid>

        <Grid item className="postsSectionItem">

          <div className="postsSectionDiv">
              {viewType === "lang" && <SpecificLanguage language={lang} />}
              <FilterSection renderFilterFunction={changeTofilterView} lang={lang}/>
              {viewType === "main" && <ListRecommendationService main />}
              {viewType === "saved" && <ListRecommendationService saved />}
              {viewType === "reported" && <ListRecommendationService reported />}
              {viewType === "self" && <ListRecommendationService self />}
              {viewType === "filtered" && FilterView()}
              {viewType === "lang" && <ListRecommendationService lang={lang} />}
          </div>

        </Grid>

         <Grid className="suscriptionSectionItem">

          <div className="suscriptionSectionDiv">
            <SponsorRecom />

          </div>
        </Grid >

      </Grid>
    );
}
