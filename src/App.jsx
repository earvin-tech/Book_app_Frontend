import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookDescription from './pages/BookDescription';
import ReadingProgressTracker from './ReadingProgessTracker';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/book/:id" element={<BookDescription />} />
                <Route path="/reading-progress" element={<ReadingProgressTracker />} />
            </Routes>
        </Router>
    );
}

export default App;
