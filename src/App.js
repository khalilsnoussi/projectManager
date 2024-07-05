import React, {useState} from 'react';
import LoginPage from './LoginPage';
import Card from './MyCard';
import Navbar from './Navbar';
import svgImg from './image.svg';
import FormDialog from './FormDialog';
import Home from './Home';
import SignupDialog from './SignupDialog';





function App() {
  /*
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }*/
  const [openSignup, setopenSignup] = useState(false);
  const handleClickOpenSignup = () => {
    setopenSignup(true);
  }
  const handleCloseSignup = () => {
    setopenSignup(false);
  }
  return (
    <>
      {/*<Navbar handleClickOpen={handleClickOpen}/>
      <Home/>
      <FormDialog open={open} handleClose={handleClickClose}/>*/}
      <LoginPage handleClickOpenSignup = {handleClickOpenSignup}/>
      <SignupDialog openSignup={openSignup} handleCloseSignup={handleCloseSignup} />
      
    </>
  );
}

export default App;
