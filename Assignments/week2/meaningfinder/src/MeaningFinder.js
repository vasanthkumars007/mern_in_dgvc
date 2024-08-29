import React, { useState } from 'react';

const MeaningFinder = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleButtonClick = async () => {
        if (name.trim()) {
            try {
                const response = await fetch(`https://api.agify.io/?name=${name}`);
                const data = await response.json();
                console.log(data);
                setMessage('See the console for the result.');
            } catch (error) {
                console.error("Error fetching the API:", error);
                setMessage('Error fetching data. Please try again.');
            }
        } else {
            setMessage('Please enter a valid name.');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
            fontFamily: "'Roboto', sans-serif",
            padding: '20px',
            color: '#fff',
            textAlign: 'center',
        },
        heading: {
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '40px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            animation: 'fadeInDown 1s ease',
        },
        input: {
            padding: '12px 16px',
            fontSize: '18px',
            width: '320px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            transition: 'none',
        },
        button: {
            padding: '12px 24px',
            fontSize: '18px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
            transform: 'translateY(-2px)',
        },
        message: {
            marginTop: '20px',
            fontSize: '16px',
            fontStyle: 'italic',
            color: '#FFD700',
            animation: 'fadeIn 1s ease',
        },
        '@keyframes fadeInDown': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Meaning Finder</h1>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter a name"
                style={styles.input}
            />
            <button
                style={styles.button}
                onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                onClick={handleButtonClick}
            >
                Find Meaning
            </button>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

export default MeaningFinder;
