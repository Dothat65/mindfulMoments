import React from 'react';
import '../styles/resource.css'

function Resources() {
    return (
        <div className="resources-container">
            <h1>Resources</h1>
            <div className="resource-list">
                <div className="resource-item">
                    <h2>Resource 1</h2>
                    <p>Description of Resource 1</p>
                </div>
                <div className="resource-item">
                    <h2>Resource 2</h2>
                    <p>Description of Resource 2</p>
                </div>
                <div className="resource-item">
                    <h2>Resource 3</h2>
                    <p>Description of Resource 3</p>
                </div>
                {/* Add more resource items as needed */}
            </div>
        </div>
    );
}

export default Resources;
