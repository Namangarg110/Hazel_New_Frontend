import './App.css';
import SearchScheduleAppointment from './Components/SearchScheduleAppointment';
import ScheduleAppointmentUI from "./Components/ScheduleAppointmentUI"
import { Route, Routes } from 'react-router-dom';
import EarliestAvailable from './Components/EarliestAvailable';
import CalendarsHanding from './NavBarHadingContent/CalendarsHading';
import HistoryHading from './NavBarHadingContent/HistoryHading';
import OptimizationRulesHading from './NavBarHadingContent/OptimizationRulesHading';
import AddNewStudents from "./Components/AddNewStudents"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SearchScheduleAppointment/>}></Route>
        <Route path='/scheduleAppointmentUI' element={<ScheduleAppointmentUI/>}></Route>
        <Route path='/earliestAvailable' element={<EarliestAvailable/>}></Route>
        <Route path='/calendarHading' element={<CalendarsHanding/>}></Route>
        <Route path='/historyHading' element={<HistoryHading/>}></Route>
        <Route path='/optimizationRulesHading' element={<OptimizationRulesHading/>}></Route>
        <Route path='/addNewStudents' element={<AddNewStudents/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
