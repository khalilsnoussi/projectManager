import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import MyCard from './MyCard';
import MyCalendar from './MyCalendar';
import Chart from './Chart';
import svgImg from './image.svg';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import MyCardtaskComponent  from './Component/taskComponent' ;  
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function Home() {
    const [completedTasks, setCompletedTasks] = useState(7); // Example value
    const [totalTasks, setTotalTasks] = useState(10); // Example value
    const [events, setEvents] = useState([]);

    const [allEvents , setAllEvents] =  useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwtDecode(token);
                const userId = decoded.user.id;

                try {
                    const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/events`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setEvents(response.data);
                } catch (err) {
                    console.error(err);
                }
            }
        };

        fetchEvents();
    }, []);

    const handleAddEvent = async (newEvent) => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            const userId = decoded.user.id;
            console.log(userId);

            try {
                const response = await axios.post(`http://127.0.0.1:5000/api/users/${userId}/events`, newEvent, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEvents(response.data);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const fetchAllEvents = async () => {
        const token = localStorage.getItem('token');
        if (token) {
                    const decoded = jwtDecode(token);
                    const userId = decoded.user.id;
                try { 
                const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/events` , {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log("here is data ",response.data) 
                setAllEvents(response.data);
                } catch (error) {
                console.error("Erroro :",error);
        }
            }
      }; 

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={6}>
                {/* Sidebar */}
                <Grid item xs={12} md={3} lg={3}>
                    
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ color: 'black', background: 'white'}}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                    Calendrier
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                    1er Janvier
                                </Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <MyCalendar events={events} onAddEvent={handleAddEvent} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Todo Bar */}
                <Grid item xs={12} md={3} sx={{ height: '100%' }}>
                    <Box sx={{ background: 'white', padding: '5px', borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                            Taches courante
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <MyCardtaskComponent allEvents={events} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
