import React from 'react';
import { Link } from 'react-router';
import Button from '@mui/material/Button';
import logo from '../imgs/logo.png'; // Import the logo image

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                padding: '20px'
            }}
        >
            {/* Logo Placeholder */}
            <div>
                <img
                    src={logo} // Use the imported logo
                    alt="Temple Logo"
                    style={{
                        width: '300px',
                        borderRadius: '50%', // Optional for circular logos
                        marginBottom: '10px'
                    }}
                />
            </div>

            {/* Buttons Section */}
            <div style={{ display: 'flex', gap: '15px' }}>
                <Link to="/form" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Add Seve
                    </Button>
                </Link>

                <Link to="/view-all" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        View All
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;