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
import { ArrowBack } from "@mui/icons-material";


const PreviewScreen: React.FC<any> = (props: any) => {

    const { bill_num, name, mobile, email, gothra, nakshatra, rashi, seve, scheduled_date, amount, goBack } = props

    const downloadPdf = async () => {
        const input = document.getElementById('seveCard') as HTMLElement;
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width / 2, canvas.height / 2], // Adjust based on the scaled canvas
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width / 2;
    const imgHeight = canvas.height / 2;

    const x = (pdfWidth - imgWidth) / 2;
    const y = (pdfHeight - imgHeight) / 2; 
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        pdf.save('sampleCard.pdf')
    };
    return (
            <div className="row flex-column align-items-center">
                <div id="seveCard" className="col-4">

                    <div className="row justify-content-center">
                        <img
                            src={logo} 
                            alt="Temple Logo"
                            style={{
                                width: '250px',
                            }}
                        />
                    </div>

                    <Card className="justify-content-center" sx={{boxShadow:4}}>
                        <CardContent className="p-5">
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

                <Stack className="col-5 my-3 justify-content-center"   direction="row"  spacing={3} >
                <Button  variant="outlined"  color="info" onClick={goBack} startIcon={<ArrowBack />}  >
                        Go Back
                </Button>

                    <Link  to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary" endIcon={<HomeIcon />}>Go Home</Button>
                    </Link>
                    <Button  variant="outlined" color="error" endIcon={<PictureAsPdfIcon />} onClick={downloadPdf}>Download PDF</Button>
             

                </Stack>

            </div>

    )

}


export default PreviewScreen