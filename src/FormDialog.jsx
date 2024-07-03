import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';



export default function FormDialog({open, handleClose}) {
    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Programmer une tache"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    choisir la tache ainsi que la date.
                </DialogContentText>
                <TextField/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box>
                        <DatePicker
                            label="Select Date"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                </LocalizationProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Fermer
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Envoyer
                </Button>
            </DialogActions>
        </Dialog>
    );
}