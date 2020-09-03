import React, {useState} from "react";
import "./CreateRecomendation.css"
import TextField from "@material-ui/core/TextField";
import ContentFileUpload from "./ContentFileUpload";
import ContentSelector from "./ContentSelector";
import Button from "@material-ui/core/Button";
import AddCategory from "./AddCategory";

export default function CreateRecommendation() {

    const [recommendation, setRecommendation] = useState({contentType: '', url: '', file: '', image: ''});
    const [flag, setFlag] = useState(false);

    function handleChange(event) {
        setRecommendation({...recommendation, [event.target.name]: event.target.value});
    }

    function submit() {
        const createRecommendation = {
            title: recommendation.title,
            description: recommendation.description,
            contentType: recommendation.contentType,
            url: recommendation.url,
            date: new Date()
        }
        localStorage.setItem('recommendation', JSON.stringify(createRecommendation));
        setFlag(true);
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

                    <ContentSelector handle={handleChange} recommendation={recommendation}/>

                    {recommendation.contentType && recommendation.contentType === 'Url' ?
                        (
                            <TextField
                                name={'url'}
                                fullWidth
                                label={'url'}
                                placeholder="Please set the url content"
                                required
                                onChange={handleChange}
                            />
                        ) : !recommendation.contentType ? undefined : (
                            <ContentFileUpload flag={flag} type={'file'}/>
                        )
                    }

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
