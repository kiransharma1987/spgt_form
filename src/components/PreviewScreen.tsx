import React from "react"
import { Card, CardContent, Stack } from '@mui/material';

import Grid from '@mui/material/Grid2';


const PreviewScreen: React.FC = () => {

    return (
        <div className="container">
            <div className="d-flex">
                <Card className="col-4 mx-auto mt-5">
                    <CardContent  className="p-4">


                        <Grid container rowSpacing={3}>
                            <Grid size={6} >
                                <div className="field-head">Name:</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-value ">Keerthan</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Mobile:</div>
                            </Grid>
                            <Grid size={6}>
                                <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Bill Number:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Rashi:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Gothra:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Nakshatra:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Seve:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                            <Grid  size={6}>
                                <div className="field-head">Amount:</div>
                            </Grid>
                            <Grid size={6}>
                            <div className="field-value">9666550606</div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </div>
        </div>
    )

}


export default PreviewScreen