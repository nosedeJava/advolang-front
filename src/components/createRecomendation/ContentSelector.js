import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React from "react";

const options = [
    'Multimedia File',
    'Url'
]

export default function ContentSelector(props) {
    return(
        <FormControl className='textField' required fullWidth>
            <InputLabel id="demo-simple-select-label">Content Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.recommendation.contentType}
                onChange={props.handle}
                name="contentType"
                placeholder="Please select a content type"
            >
                {options.map((option, index) => (
                    <MenuItem value={option} key={index}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
