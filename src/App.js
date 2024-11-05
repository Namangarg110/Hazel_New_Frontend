import logo from './logo.svg';
import './App.css';
import SearchScheduleAppointment from './Components/SearchScheduleAppointment';
import ScheduleAppointmentUI from "./Components/ScheduleAppointmentUI"
import { Route, Routes } from 'react-router-dom';
import EarliestAvailable from './Components/EarliestAvailable';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SearchScheduleAppointment/>}></Route>
        <Route path='/scheduleAppointmentUI' element={<ScheduleAppointmentUI/>}></Route>
        <Route path='/earliestAvailable' element={<EarliestAvailable/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
