import React from 'react';
import '../styles/moodTracker.css';

function Home() {
    return (
        <div className="main-container">
            <div className="mood-entry">
                <h2>How are you feeling today?</h2>
                <div className="mood-options">
                    <label><input type="radio" name="mood1" value="5" /> Very Good</label>
                    <label><input type="radio" name="mood1" value="4" /> Good</label>
                    <label><input type="radio" name="mood1" value="3" defaultChecked /> Okay</label>
                    <label><input type="radio" name="mood1" value="2" /> Bad</label>
                    <label><input type="radio" name="mood1" value="1" /> Very Bad</label>
                </div>
            </div>
            <div className="mood-entry">
                <h2>How was your sleep last night?</h2>
                <div className="mood-options">
                    <label><input type="radio" name="mood2" value="5" /> Very Good</label>
                    <label><input type="radio" name="mood2" value="4" /> Good</label>
                    <label><input type="radio" name="mood2" value="3" defaultChecked /> Okay</label>
                    <label><input type="radio" name="mood2" value="2" /> Bad</label>
                    <label><input type="radio" name="mood2" value="1" /> Very Bad</label>
                </div>
            </div>
            <div className="mood-entry">
                <h2>How is your energy level today?</h2>
                <div className="mood-options">
                    <label><input type="radio" name="mood3" value="5" /> Very Good</label>
                    <label><input type="radio" name="mood3" value="4" /> Good</label>
                    <label><input type="radio" name="mood3" value="3" defaultChecked /> Okay</label>
                    <label><input type="radio" name="mood3" value="2" /> Bad</label>
                    <label><input type="radio" name="mood3" value="1" /> Very Bad</label>
                </div>
            </div>
            <div className="mood-entry">
                <h2>How productive do you feel today?</h2>
                <div className="mood-options">
                    <label><input type="radio" name="mood4" value="5" /> Very Productive</label>
                    <label><input type="radio" name="mood4" value="4" /> Productive</label>
                    <label><input type="radio" name="mood4" value="3" defaultChecked /> Somewhat Productive</label>
                    <label><input type="radio" name="mood4" value="2" /> Not Very Productive</label>
                    <label><input type="radio" name="mood4" value="1" /> Not Productive at All</label>
                </div>
            </div>
            <div className="mood-entry">
                <h2>How stressed do you feel today?</h2>
                <div className="mood-options">
                    <label><input type="radio" name="mood5" value="1" /> Not Stressed</label>
                    <label><input type="radio" name="mood5" value="2" /> Somewhat Stressed</label>
                    <label><input type="radio" name="mood5" value="3" defaultChecked /> Moderately Stressed</label>
                    <label><input type="radio" name="mood5" value="4" /> Very Stressed</label>
                    <label><input type="radio" name="mood5" value="5" /> Extremely Stressed</label>
                </div>
            </div>
            <button id="submit-btn">Submit</button>
        </div>
    );
}

export default Home;
