import React from 'react'
import Header from './Header.jsx'
import Card from './Card.jsx'
import tamiuLogo from './assets/tamiu logo.jpeg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import StaffPage from './StudentsPage.jsx';  // The Staff page component



function App() {

  
  const handleStudentClick = () => {
    window.open("https://www.tamiu.edu/current.shtml", "_blank");
  };

  const handleProfessorClick = () => {
    window.open("https://www.tamiu.edu/adminis/ohr/resourcesforhiringsupervisors.shtml", "_blank");
  };

  const handleStaffClick = () => {
    window.open("https://www.example.com/staff", "_blank");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="card-container">
          <Card
            title="Students"
            text="This is for students and helps students"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleStudentClick}
          />
          <Card
            title="Professors"
            text="This is for professors and helps professors"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleProfessorClick}
          />
          <Card
            title="Staff"
            text="This is for Staff and helps staff"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleStaffClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;