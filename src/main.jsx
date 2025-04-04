import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomeCalendar from "./pages/Calendar.jsx";
import CreateMeeting from "./pages/CreateMeeting.jsx";
import ViewMeeting from "./pages/ViewMeeting.jsx";
import EditMeeting from "./pages/EditMeeting.jsx";
import PreviousMeetings from "./pages/PreviousMeetings.jsx";
import Contacts from "./pages/Contacts.jsx";
import FAQ from "./pages/FAQ.jsx";
import MeetingHeatmap from './pages/MeetingHeatmap.jsx';
import Login from './pages/Onboarding/Login.jsx';
import Signup from './pages/Onboarding/Signup.jsx';
import Onboarding from './pages/Onboarding/Onboarding.jsx';
import { AuthProvider } from "./AuthProvider.jsx";
import Profile from "./pages/Profile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeCalendar /> }/>
          <Route path="/create-meeting" element={<CreateMeeting /> }/>
          <Route path="/meeting/:meetingId" element={<ViewMeeting />} />
          <Route path="/edit-meeting/:meetingId" element={<EditMeeting />} />
          <Route path="/previous-meetings" element={<PreviousMeetings /> }/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/FAQ" element={<FAQ /> }/>
          <Route path="/:meetingId/heatmap" element={<MeetingHeatmap /> }/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/signup" element={<Signup /> }/>
          <Route path="/onboarding" element={<Onboarding /> }/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
