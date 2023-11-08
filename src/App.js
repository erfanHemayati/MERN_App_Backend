import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMemo } from "react"; //returns memoised value so it won't need to be recaculated
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "theme";
function App() {
  const mode = useSelector((state => { state.mode })) //using useselector to grab the state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profilePage/:userId" element={<ProfilePage />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
