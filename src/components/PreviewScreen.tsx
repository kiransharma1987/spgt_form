import React from "react"
import { Button, Card, CardContent, Stack } from '@mui/material';
import { Link } from 'react-router';

import Grid from '@mui/material/Grid2';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from '../imgs/logo.png'; // Import the logo image


const PreviewScreen: React.FC<any> = (props: any) => {

    const { bill_num, name, mobile, email, gothra, nakshatra, rashi, seve, scheduled_date, amount, goBack } = props

    const downloadPdf = async () => {
        const input = document.getElementById('seveCard') as HTMLElement;
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, canvas.width / 4, canvas.height / 4);
        pdf.save('sampleCard.pdf')
    };
    return (
        <div className="container">
            <div className="row flex-column justify-content-center align-items-center">
                <div id="seveCard" className="col-5">

                    <div className="d-flex justify-content-center">
                        <img
                            src={logo} 
                            alt="Temple Logo"
                            
                            style={{
                                width: '250px',
                            }}
                        />
                    </div>

                    <Card  >
                        <CardContent className="p-4">
                            <Grid container rowSpacing={2}>
                                <Grid size={6}>
                                    <div className="field-head">Bill Number:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{bill_num}</div>
                                </Grid>
                                <Grid size={6} >
                                    <div className="field-head">Name:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value ">{name}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Mobile:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{mobile}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Email:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{email}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Rashi:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{rashi}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Gothra:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{gothra}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Nakshatra:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{nakshatra}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Seve:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{seve}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Seve date:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{scheduled_date}</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-head">Amount:</div>
                                </Grid>
                                <Grid size={6}>
                                    <div className="field-value">{amount}</div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>

                <Stack className="col-4 my-3"   direction="row"  spacing={2} >
                    <Button  variant="contained" color="secondary" endIcon={<PictureAsPdfIcon />} onClick={downloadPdf}>Download PDF</Button>
                    <Button  variant="contained"  color="success" onClick={goBack} endIcon={<AddIcon />}  >
                        Add New Seve
                    </Button>
                    <Link  to="/home" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" endIcon={<HomeIcon />}>Go Home</Button>
                    </Link>

                </Stack>

            </div>



        </div>
    )

}


export default PreviewScreen