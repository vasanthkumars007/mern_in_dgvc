import React, { useState } from 'react';

const MeaningFinder = () => {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleButtonClick = async () => {
        if (name.trim()) {
            try {
                const response = await fetch(`https://api.agify.io/?name=${name}`);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching the API:", error);
            }
        } else {
            console.log("Please enter a valid name.");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter a name"
            />
            <button onClick={handleButtonClick}>Find Meaning</button>
        </div>
    );
};

export default MeaningFinder;
