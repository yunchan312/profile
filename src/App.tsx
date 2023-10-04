import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Routes/Profile";
import TimeTable from "./Routes/TimeTable";
import PlayLists from "./Routes/PlayLists";
import Home from "./Routes/Home";
import Studies from "./Routes/Studies";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/playlists" element={<PlayLists />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
