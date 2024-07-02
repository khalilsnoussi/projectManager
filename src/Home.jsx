import MyCard from './MyCard';
import React, {useState} from 'react';
import './home.css'
import { Card, CardContent, Typography, Box, Divider} from '@mui/material';
import MyCalendar from './MyCalendar';
import NoteIcon from '@mui/icons-material/Note';
import Chart from './Chart';
import svgImg from './image.svg';







export default function Home() {
    const [completedTasks, setCompletedTasks] = useState(7); // Example value
    const [totalTasks, setTotalTasks] = useState(10); // Example value
    

    return (
        <div>
            <div class="container">
                <div class="sidebar">
                    <img src={svgImg} alt='illustration' style={{width : "100%", height: "auto"}}/>
                </div>
                <div class="main-content">
                    <Card sx ={{margin : 'auto', width : '60%', height : '60%',color : 'black',padding : '40px',background : 'white'}}>
                        <CardContent>
                            <Box sx = {{display : 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : '10px'}}>
                                <Typography variante = 'h6' sx = {{fontWeight : 'bold'}}>
                                    Calendrier
                                </Typography>
                                <Typography variant="h6" sx = {{fontWeight : 'bold'}}>
                                    December 12
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{width : '100%', height : '400px', marginTop : '40px'}}>
                                <MyCalendar/>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className='todo-bar'>
                    <div className='todo-header'>
                        <Box sx={{display : 'flex', justifyContent: 'space-between', alignItems : 'center'}}>
                            <NoteIcon fontSize='large'/>
                            <Typography variant='h6' sx={{fontWeight : 'bold', marginLeft : '10px'}}>
                                Tâches
                            </Typography>
                        </Box>
                    </div>
                    <div className='todo-main'>
                        <Box sx = {{marginBottom:"50px"}}>
                            <Chart completedTasks={completedTasks} totalTasks={totalTasks}/>
                        </Box>
                        <div className='todo-content'>
                            <MyCard/>
                            <MyCard/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
