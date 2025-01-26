/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from "react-router-dom";
import DemoPage from './pages/demoPage.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Set DemoPage (or any desired component) as the default page */}
        <Route path="/" element={<DemoPage />} />
        <Route path="/profile/:name" element={<ProfileRouter />} />
      </Routes>
    </Router>
  </StrictMode>
);

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    case "Ryan(Demo)":
      return <DemoPage />;

    // Add custom profile pages as needed
    case "Person1":
      return <DemoPage />;
    case "Person2":
      return <DemoPage />;
    case "Person3":
      return <DemoPage />;
    case "Person4":
      return <DemoPage />;
    case "Person5":
      return <DemoPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "Person8":
      return <DemoPage />;
    case "Person9":
      return <DemoPage />;
    case "Person10":
      return <DemoPage />;
    default:
      return <div>Profile not found</div>;
  }
}