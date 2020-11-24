import React from 'react';
import './PrincipalView.css';
import ListRecommendationService from "../../services/ListRecommendationService"
import FilterSection from "./FilterSection"
import SpecificLanguage from '../languageComponent/SpecificLanguage';
import {Trends} from '../trendsComponent/Trends';
import {Subscription} from '../subscriptionComponent/Subscription';
import {SponsorRecom} from '../sponsorComponent/Sponsor';
import { Grid} from '@material-ui/core';

export default function PrincipalView(props) {

    const [viewType, setViewType] = React.useState(props.type);
    const [title, setTitle] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    const [type, setType] = React.useState(props.type);

    const changeViewType = (newType) => {
        setViewType(newType)
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
      <Grid container className="mainDiv" spacing={0} direction="row">

        <Grid item className="trendsSectionItem">

          <div className="trendsSectionDiv">
            <Trends />

          </div>
        </Grid>

        <Grid item className="postsSectionItem">

          <div className="postsSectionDiv">
              {viewType === "lang" && <SpecificLanguage language={props.language} />}
              <FilterSection renderFilterFunction={changeTofilterView} lang={props.language}/>
              {viewType === "main" && <ListRecommendationService main />}
              {viewType === "saved" && <ListRecommendationService saved />}
              {viewType === "reported" && <ListRecommendationService reported />}
              {viewType === "self" && <ListRecommendationService self />}
              {viewType === "filtered" && FilterView()}
              {viewType === "lang" && <ListRecommendationService lang={props.language} />}
          </div>

        </Grid>

         <Grid item className="subscriptionAndRecomSectionItem">

          <div className="subscriptionSectionDiv">
            <Subscription />
          </div>

          <br />

          <div className="sponsorRecomsSectionDiv">
            <SponsorRecom />
          </div>

        </Grid >

      </Grid>
    );
}