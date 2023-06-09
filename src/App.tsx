import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h6>YouTube Clone</h6>
            </header>
            <div className="App-content">
                <main className={"main-content"}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<VideoList />} />
                            <Route path="/video/:videoId" element={<VideoPlayer/>} />
                        </Routes>
                    </BrowserRouter>
                </main>
            </div>
        </div>
    );
}

export default App;
