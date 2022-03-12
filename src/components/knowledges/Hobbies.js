import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-music"></i>
                    <span>Music</span>
                    </li>
                    <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                    </li>
                    <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span>Piscine</span>
                    </li>
            </ul>
        </div>
    );
};

export default Hobbies;