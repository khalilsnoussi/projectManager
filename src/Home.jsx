import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import MyCalendar from './MyCalendar';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 
import MyCardtaskComponent  from './Component/taskComponent' ; 
import  MyFinishedTaskComponent from "./Component/dataInfo" ; 
import BarsDataset from './Component/stats';
import { MessageLeft, MessageRight } from "./Component/ChatBox";
import { yellow } from '@mui/material/colors';
import UsersTasksTable from './Component/usersTasksTable';
export default function Home() {
    const [completedTasks, setCompletedTasks] = useState([]); // Example value
    const [totalTasks, setTotalTasks] = useState(10); // Example value
    const [events, setEvents] = useState([]);
    const [taskOnProgress , setTaskOnProgress ]  = useState([]) ; 
    const [allEvents , setAllEvents] =  useState([]);
    const [allFinished , setFinishedEvents] = useState([]);
    const [allUsersTask , setAllUsersTask] =   useState([]);
    const [allUsersEvents , setAllUsersEvents] =   useState([]);

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
        const fecthFinishedEvents = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwtDecode(token);
                const userId = decoded.user.id;

                try {
                    const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/finishedEvents`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setCompletedTasks(response.data)
                } catch (error) {
                    
                }
            } 
        }
        const fecthAllUsersData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
              const decoded = jwtDecode(token);
              const userId = decoded.user.id;
              try {
                const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/allUsersEvents`, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                });
                console.log('Response Status:', response.status); // Check the response status
                console.log('Response Data:', response.data); // Log the response data
                if (response.status === 200) {

                  setAllUsersTask(response.data); // Update the state
                 
                  const Events = buildAllEventsdata(allUsersTask) ; 
                  console.log("All returned Events " ,Events)
                  setAllUsersEvents(Events) ; 
                }
              } catch (error) {
                console.error(error);
              }
            }
          };

        fetchEvents();
        fecthAllUsersData();
        fecthFinishedEvents();
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

    const buildAllEventsdata = (data) => {
        const allDataUsers = [];
        console.log("data " , data)
        data.forEach((user) => {
            if (user.events && Array.isArray(user.events) && user.events.length > 0) {
                user.events.forEach((event) => {
                    allDataUsers.push({
                        title: user.username + " s'occupe de " + event.title,
                        start: event.start,
                        end: event.end,
                        _id: event._id,
                    });
                });
            }
        });
        console.log("here is the retturned value " , allDataUsers)
        return allDataUsers;
    }

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
      console.log("Events",allUsersEvents)
      console.log("small events :",events)
    return (
        
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={6}>
                {/* Sidebar */}
                <Grid item xs={12} md={3} sx={{ height: '100%' }}>
                            <Box sx={{
                              background: 'white', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                                    <Typography>Statistiques</Typography>
                                </Box>
                                <Divider />
                                <br />
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <BarsDataset></BarsDataset>
                                </Box>
                            </Box>
                            <br />
                            <Box sx={{
                              background: 'white', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                                    <Typography>Diagramme des taches</Typography>
                                </Box>
                            </Box>
                    </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={6}>  
                    <Card sx={{ color: 'black', background: 'white'}}>
                        <Box sx= {{ background: '#dee2e6', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6 }} >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,  }}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                    Calendrier
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                    1er Janvier
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <MyCalendar events={allUsersEvents} onAddEvent={handleAddEvent} />
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                {/* Todo Bar */}
                <Grid item xs={12} md={2} sx={{ height: '100%'  , justifyContent: 'flex-end' }}>
                    <Box sx={{ background: 'white', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            Taches courante
                        </Box>
                        <Divider/>
                        <br />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <MyCardtaskComponent allEvents={events} setEvents={setEvents} allFinishedEvents = {completedTasks}   setFinishedEvents={setCompletedTasks}  />
                        </Box>
                    </Box>
                        <br />
                    <Box sx={{ background: 'white', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            Taches Effectuer
                        </Box>
                        <Divider/>
                        <br />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <MyFinishedTaskComponent allFinishedEvents = {completedTasks}  setFinishedEvents={setCompletedTasks}  />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{ height: '100%', justifyContent: 'center', textAlign: 'center' }}>
                    <Box sx={{ background: 'white', padding: '5px', borderRadius: 1 , boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',  elevation: 6  }}>
                        <p>Messagerie</p>
                        <Divider/>
                        <br />   
                        {/* <MessageLeft
            message="Nik mok  dir task dyalk "
            timestamp="MM/DD 00:00" 
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Serge"
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp Chouf l video lkhra t3 mia khalifa "
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Serge" 
            avatarDisp={false}
          />
          <MessageRight
            message="Nice "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Carlo"
            avatarDisp={true}
          />
          <MessageRight
            message="Ok"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Carlo"
            avatarDisp={false}
          /> */}
               <UsersTasksTable>

               </UsersTasksTable>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
