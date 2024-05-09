import React, { useState, useEffect } from 'react';
import './meditation.css';

function Meditation() {
  const [seconds, setSeconds] = useState(0);
  const [phase, setPhase] = useState('Inhale'); // Inhale, Hold, Exhale
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      if (phase === 'Inhale' && seconds >= 4) {
        setPhase('Hold');
        setSeconds(0);
      } else if (phase === 'Hold' && seconds >= 4) {
        setPhase('Exhale');
        setSeconds(0);
      } else if (phase === 'Exhale' && seconds >= 4) {
        setPhase('Inhale');
        setSeconds(0);
      }
    }
  }, [seconds, phase, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setSeconds(0);
    setPhase('Inhale');
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
    setPhase('Inhale');
  };

  return (
    <div className="meditation-container">
      <h1>Meditation 1: Breathing Exercise</h1>
      <div className="timer">
        <h2>{phase}</h2>
        <p>{seconds} seconds</p>
      </div>
      <div className="controls">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      </div>
    </div>
  );
}

export default Meditation;
