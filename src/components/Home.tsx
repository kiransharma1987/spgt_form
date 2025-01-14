import React from 'react'
import { Link } from 'react-router';

import Button from '@mui/material/Button';

const Home: React.FC = () => {
    return (

        <div>

            <Link to="/form" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Link
                </Button>
            </Link>


        </div>
    )
}



export default Home;