import React from 'react';

function Journal() {
    return (
                <div className="journal-container">
            <h1 className="journal-heading">Journal</h1>
            <textarea
                className="journal-textarea"
                placeholder="Write your journal entry here..."
            ></textarea>
            <button className="post-button">Post</button>

            {/* Display journal entries */}
            <div className="entry-container">
                <div>
                    <h3 className="entry-date">05/05/2024</h3>
                    <p className="entry-content">This is a sample journal entry.</p>
                </div>
                {/* Add more entries here */}
            </div>
        </div>
    );
    }
    export default Journal;