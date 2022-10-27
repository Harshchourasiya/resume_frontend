import AppBar from "../Components/NavBar/NavBar";
import { Stack } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseTemplate from "../ChooseTemplate/ChooseTemplate";
import DownloadResume from "../DownloadResume/DownloadResume";
import Profile from "../Profile/Profile";
import Collector from "../Collector/Collector";
import Home from "../Home/Home";
import NotFound from "../NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Stack>
        <AppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collector" element={<Collector />} />
          <Route path="/choose" element={<ChooseTemplate />} />
          <Route path="/download/:id" element={<DownloadResume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default App;
