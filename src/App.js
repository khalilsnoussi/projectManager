import React, {useState} from 'react';
import LoginPage from './LoginPage';
import Card from './MyCard';
import Navbar from './Navbar';
import svgImg from './image.svg';
import FormDialog from './FormDialog';
import Home from './Home';





function App() {
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }
  return (
    <>
      <Navbar handleClickOpen={handleClickOpen}/>
      <Home/>
      <FormDialog open={open} handleClose={handleClickClose}/>
      
    </>
  );
}

export default App;
