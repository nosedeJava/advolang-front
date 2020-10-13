import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./CreateRecommendation.css";
import {Image, PostAdd, VideoLabel} from "@material-ui/icons";
import Post from "../postSection/Post";
import ThumbnailView from "../thumbnailSection/ThumbnailView";
import Content from "../contentSection/Content";

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '60%',
    },
}));

export default function CreateRecommendation() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const [flag, setFlag] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    

    return (
        <div className="create-recommendation-container">
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab icon={<PostAdd/>} label="Post" {...a11yProps(0)} />
                        <Tab icon={<Image/>} label="Thumbnail View" {...a11yProps(1)} />
                        <Tab icon={<VideoLabel/>} label="Content" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <Post index={0}/>
                    <ThumbnailView index={1} flag={flag}/>
                    <Content index={2} setFlag={setFlag}/>
                </SwipeableViews>
            </div>
        </div>
    );
}
