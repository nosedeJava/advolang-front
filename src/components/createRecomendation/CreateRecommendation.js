import React, {useState} from "react";
import "./css/CreateRecomendation.css"
import TextField from "@material-ui/core/TextField";
import ContentFileUpload from "./ContentFileUpload";
import ContentSelector from "./ContentSelector";
import Button from "@material-ui/core/Button";
import AddCategory from "./AddCategory";
import {useDispatch, useSelector} from "react-redux";
import AllActions from "../../redux/actions/AllActions";

export default function CreateRecommendation() {

    const recommendation = useSelector(state => state.newRecommendation);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);

    function handleChange(event) {
        dispatch(
            AllActions
                .CreateRecommendationActions
                .updateRecommendation({[event.target.name]: event.target.value})
        )
    }

    function submit() {
        setFlag(true);
        const createRecommendation = {
            title: recommendation.title,
            description: recommendation.description,
            contentType: recommendation.contentType,
            url: recommendation.url,
            file: recommendation.file,
            image: recommendation.image,
            categories: recommendation.categories,
            date: new Date()
        }
        localStorage.setItem('recommendation', JSON.stringify(createRecommendation));
    }

    return (
        <div className="body">
            <div className="container">
                <div className="head">
                    <h1>New Recommendation</h1>
                </div>
                <form>
                    <TextField
                        name={'title'}
                        fullWidth
                        label={'Title'}
                        placeholder="Please set a title for your recommendation"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name={'description'}
                        fullWidth
                        label={'Description'}
                        multiline
                        placeholder="Please set a description for your recommendation"
                        required
                        onChange={handleChange}
                    />
                    <ContentFileUpload flag={flag} type={'image'}/>

                    <ContentSelector handle={handleChange}/>

                    {recommendation.contentType === 'Url' && (
                        <TextField
                            name={'url'}
                            fullWidth
                            label={'url'}
                            placeholder="Please set the url content"
                            required
                            onChange={handleChange}
                        />
                    )}

                    {recommendation.contentType === "Multimedia File" && (
                        <ContentFileUpload flag={flag} type={'file'}/>
                    )}

                    <AddCategory/>

                    <Button
                        onClick={submit}
                        className="submit"
                        variant="contained"
                        color="primary"
                    >
                        Create Recommendation
                    </Button>
                </form>
            </div>
        </div>
    )
}
