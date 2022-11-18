import AppBar from "../Components/NavBar/NavBar";
import { Stack } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseTemplate from "../Pages/ChooseTemplate/ChooseTemplate";
import DownloadResume from "../Pages/DownloadResume/DownloadResume";
import Profile from "../Pages/Profile/Profile";
import Collector from "../Pages/Collector/Collector";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Stack>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collector" element={<Collector />} />
          <Route path="/choose" element={<ChooseTemplate />} />
          <Route path="/download/:id" element={<DownloadResume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default App;
