import { Rabbit } from "../../icons/Rabbit";
import { Button } from "../Button";
import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { Turtle } from "../../icons/Turtle";
import Speech from 'react-speech';

const pairs = {
    // "hi": "Hi, I am Fluenty! How can I assist you today?",
    "hello": "Hi, I am Fluenty! How can I assist you today?",
    "name": "I'm Fluenty, your chatbot assistant companion! What's your name?",
    "education": "Education is the key to success! Let's see, what motivates you to learn English?",
    "fluent": "Becoming fluent is a fantastic goal! What specific aspects of the language would you like to focus on?",
    "grammar": "Grammar is an essential part of language learning. Do you have any grammar-related questions?",
    "vocabulary": "Building vocabulary is crucial! Do you have a favorite method for learning new words?",
    "pronunciation": "Pronunciation matters! Is there a specific sound or word you find challenging to pronounce?",
    "travel": "Travel broadens the mind! Are you planning a trip soon? If so, where?",
    "paris": "Paris is a beautiful city! What are you most excited to see there?",
    "tower": "The Eiffel Tower is a must-see! What other attractions are you planning to visit?",
    "food": "French cuisine is delicious! What type of food do you enjoy eating?",
    "pasta": "Pasta is one of my favorite dishes! What's your favorite type of pasta?",
    "destination": "Choosing a destination is exciting! What type of places do you enjoy visiting?",
    "business": "In the world of business, knowledge about language is power. Are there any business-related topics you'd like to discuss?",
    "meetings": "Effective communication in meetings is key. Any specific challenges you face during business meetings?",
    "negotiation": "Negotiation skills are valuable! Is there a negotiation scenario you'd like advice on?",
    "shopping": "Shopping is always a good idea! Are you looking for something specific?",
    "clothing": "Finding the perfect outfit is fun! Any particular style or clothing item you're searching for?",
    "electronics": "Tech gadgets make shopping exciting! Interested in any specific electronic devices?",
    "thanks": "You're welcome! I'm always happy to help you improve your english skills! Keep practicing and you'll be fluent in no time!",
    "thank": "You're welcome! I'm always happy to help your english skills! Keep practicing and you'll be fluent in no time!",
};


export const MicPlayer = (props) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const { transcript, resetTranscript, SpeechRecognition } = props;
    const [initial, setInitial] = useState(true)
    const getResponse = () => {
        if (initial) {
            return "Hi, welcome to Fluentify! I see you have chosen travel as a topic. May I know why?"
        }
        if (transcript === undefined || transcript.length === 0) {
            return "I am sorry, I did not hear anything. Can you repeat that?"
        }
        for (const [key, value] of Object.entries(pairs)) {
            if (transcript.toLowerCase().includes(key)) {
                return value;
            }
        }
        return "I am sorry, I am just a prototype and can't quite answer that."
    }

    useEffect(() => {
        const clickPlayButton = () => {
            if (initial) {
                const playButton = document.querySelector('.rs-play');
                if (playButton) {
                    console.log('Play button found. Clicking...');
                    playButton.click();

                } else {
                    console.error('Play button not found.');
                }
                setInitial(false);
            }
        };

        const timeoutId = setTimeout(() => {
            clickPlayButton();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
        } else {
            SpeechRecognition.stopListening();
            // Select the button element by its class
            const playButton = document.querySelector('.rs-play');

            // Check if the button element exists before attempting to click
            if (playButton) {
                playButton.click();
            }

        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleSlowDown = () => {
        if (speed > 0.6) {
            setSpeed((prev) => prev - 0.5);
        }
    }

    const handleSpeedUp = () => {
        if (speed < 1.4) {
            setSpeed((prev) => prev + 0.5);
        }
    }


    return (
        <div className="audio-player">
            <div className="audio">
                <div className="actions">
                    <Button
                        className="button-instance"
                        hierachy="secondary"
                        icon={<Turtle />}
                        size="large"
                        type="icon-only"
                        onClick={handleSlowDown}
                    />
                    <div className="frame">
                        <div className="div-wrapper">
                            <div className="div-wrapper">
                                <button className={`mobile-button ${isPlaying ? 'clicked' : ''}`} onTouchStart={togglePlayPause} onTouchEnd={togglePlayPause}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="button-instance"
                        hierachy="secondary"
                        icon={<Rabbit />}
                        size="large"
                        type="icon-only"
                        onClick={handleSpeedUp}
                    />
                </div>
                <div className="text-wrapper">
                    Kecepatan: {speed}x
                    <Speech
                        text={getResponse()}
                        rate={speed}
                        voice="Aaron" />
                </div>

            </div>
        </div >
    );
};
