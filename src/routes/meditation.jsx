import React from 'react';
import '../styles/meditation.css';

function Meditation() { 
    return (
        <div>
            <div className="section">
                <h1>Track your progress through Guided Meditation Exercises...</h1>
            </div>
            <div className="card-section">
                <div className="card">
                    <img src="" alt="Image 1" />
                    <div className="card-text">
                        <p>Text for Card 1</p>
                    </div>
                </div>
                <div className="card">
                    <img src="path_to_your_image2.jpg" alt="Image 2" />
                    <div className="card-text">
                        <p>Text for Card 2</p>
                    </div>
                </div>
                <div className="card">
                    <img src="path_to_your_image3.jpg" alt="Image 3" />
                    <div className="card-text">
                        <p>Text for Card 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meditation;
