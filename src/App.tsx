import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Routes/Profile";
import TimeTable from "./Routes/TimeTable";
import PlayLists from "./Routes/PlayLists";
import Home from "./Routes/Home";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/playlists" element={<PlayLists />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
