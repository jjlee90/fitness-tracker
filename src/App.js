import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Nav from "./components/navbar/Nav"
import "./App.css"
import StickyNav from "./components/stickyNav/StickyNav"

// import components

import CalendarDisplay from "./components/calendar/CalendarDisplay"
// import Timer from "./components/timer/Timer"
import Shop from "./components/shop/Shop"
import Countdown from "./components/countdown/Countdown"
import Stopwatch from "./components/stopwatch/Stopwatch"
import RecordList from "./components/exerciseList/RecordList"
import Edit from "./components/exerciseList/Edit"
import Create from "./components/exerciseList/Create"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route exact path="/" element={<RecordList />} />
        {/* <Route path="exerciselist" element={<ExerciseList />} /> */}
        {/* <Route path="/timer" element={<Timer />} /> */}
        <Route path="/calendar" element={<CalendarDisplay />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </div>
  )
}

export default App
