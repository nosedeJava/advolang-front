import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export class Recommendation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const defaultProps = {
            m: 1,
            border: 1,
        };

        const defaultPropsThumbnail = {
            m: 1,
            border: 1,
            width: 1,
            height: 1,
        }

        

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Box borderRadius={10} borderColor="primary.main" {...defaultProps}>
                            <Grid container>
                                <Grid item sx={1}>
                                    <Box borderRadius={10} borderColor="primary.main" {...defaultPropsThumbnail}>

                                    </Box>
                                </Grid>
                                <Grid item sx={9}>

                                </Grid>
                                <Grid item sx={2}>

                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sx={12}>

                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}