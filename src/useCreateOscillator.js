import { useState, useEffect } from 'react';

const audioContext = new AudioContext();

export default ({ frequency = 130, type = "sine" } = {}) => {
    useEffect(() => {
        // replacement for componentDidMount

        const oscillator = audioContext.createOscillator();

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        oscillator.start();
        oscillator.connect(audioContext.destination);

        return () => {
            // replacement for componentWillUnmount
            oscillator.stop();
            oscillator.disconnect();
        };
    }, []); // only trigger effect on componentDidMount and componentWillUnmount

    return null;
};