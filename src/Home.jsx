import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import MyCard from './MyCard';
import MyCalendar from './MyCalendar';
import Chart from './Chart';
import svgImg from './image.svg';


export default function Home() {
    const [completedTasks, setCompletedTasks] = useState(7); // Example value
    const [totalTasks, setTotalTasks] = useState(10); // Example value

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={6}>
                {/* Sidebar */}
                <Grid item xs={12} md={3} lg = {3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={svgImg} alt='illustration' style={{ width: '100%', height: 'auto' }} />
                    </Box>
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
                                <MyCalendar />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Todo Bar */}
                <Grid item xs={12} md={3}>
                    <Box sx={{ background: 'white', padding: '5px', borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent : 'center', marginBottom: 10 }}>
                            <NoteIcon fontSize='large' />
                            <Typography variant='h6' sx={{ fontWeight: 'bold', marginLeft: '10px' }}>
                                Tâches
                            </Typography>
                        </Box>
                        <Box sx={{ marginBottom: 2 }}>
                            <Chart completedTasks={completedTasks} totalTasks={totalTasks} />
                        </Box>
                        <Box sx={{ display: 'flex',justifyContent : 'center',flexDirection: 'column', gap: 2 }}>
                            <MyCard />
                            <MyCard />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
