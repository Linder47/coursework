import React, { Component } from 'react';
import takenPlaces from '../data/takenPlaces';

const generateNumber = () => {
    const pass = parseInt(Math.random(1, 21));
    const passage = pass > 9 ? pass : `0${pass}`;
    const shelf = parseInt(Math.random(1, 5));
    const tier = parseInt(Math.random(1, 4));
    const cell =parseInt(Math.random(1, 4));

    return `${passage}-${shelf}-${tier}-${cell}`;
}

const CreateTakenPlaces = (count) => {
    const takenPlacesInLocalStorage = JSON.parse(localStorage.getItem('takenPlaces'));
    console.log(Array.from(takenPlacesInLocalStorage));
    const takenPlacesFromData = takenPlaces;
    console.log(takenPlacesFromData);
    const a = new Set();
    if (takenPlacesInLocalStorage !== undefined) {
        a.add(takenPlacesInLocalStorage);
        console.log(a);
    }

    // const setOfLocal = new Set();
    // for (let i = 0; i < takenPlacesInLocalStorage.length - 1; i++) {
    //     setOfLocal.add(takenPlacesInLocalStorage[i]);
    // }

    let maden = 0;
    const thisPlaces = [];

    while (maden < count) {
        const num = generateNumber();
        if (!takenPlacesFromData.has(num) && !a.has(num)) {
            maden += 1;
            a.add(num);
            thisPlaces.push(num);
        }
    }

    console.log(a);

    localStorage.setItem('takenPlaces', JSON.stringify(Array.from(a)));
    return thisPlaces;
}

export default CreateTakenPlaces;