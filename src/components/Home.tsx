import React from 'react'
import { Link } from 'react-router';

import Button from '@mui/material/Button';

const Home: React.FC = () => {
    return (

        <div>

            <Link to="/form" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Add seve
                </Button>
            </Link>

            <Link to="/view-all" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                     View all
                </Button>
            </Link>

        </div>
    )
}



export default Home;