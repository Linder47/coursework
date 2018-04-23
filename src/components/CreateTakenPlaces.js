import React, { Component } from 'react';
import takenPlaces from '../data/takenPlaces';

const genRandom = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

const generateNumber = () => {
    const pass = genRandom(1, 21);
    const passage = pass > 9 ? pass : `0${pass}`;
    const shelf = genRandom(1, 5);
    const tier = genRandom(1, 4);
    const cell = genRandom(1, 4);


    return `${passage}-${shelf}-${tier}-${cell}`;
}

const CreateTakenPlaces = (count) => {
    const takenPlacesInLocalStorage = JSON.parse(localStorage.getItem('takenPlaces'));
    console.log(takenPlacesInLocalStorage);

    const takenPlacesFromData = takenPlaces;
    // console.log(takenPlacesFromData);

    const a = new Set();

    if (takenPlacesInLocalStorage !== null) {
        a.add(...takenPlacesInLocalStorage);
        console.log(a);
    }

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