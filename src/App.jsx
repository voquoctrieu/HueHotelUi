import { Box } from '@mui/material';
import HomeContainer from './pages/home/HomeContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Booking from './pages/booking/BookingContainer';
import Rooms from './pages/rooms/RoomsContainer';
import Detail from './pages/detail/Detail';
import Services from './pages/services/Services';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#5d5d5d0f' }}>
      <Router basename="/HueHotelUI">
  <Routes>
    <Route path='/' element={<HomeContainer />} />
    <Route path='/booking' element={<Booking />} />
    <Route path='/rooms' element={<Rooms />} />
    <Route path='/detail' element={<Detail />} />
    <Route path='/services' element={<Services />} />
    <Route path='/aboutUs' element={<AboutUs />} />
  </Routes>
</Router>
    </Box>
  );
}

export default App;
