import {combineReducers} from "redux";
import newRecommendation from "./CreateRecommendationReducer";

const rootReducer = combineReducers({
    newRecommendation
});

export default rootReducer;
