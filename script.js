'use strict';

// Ek
let mass = prompt('Enter object mass in kilograms: ', '');
let speed = prompt('Enter object speed in meters per second: ', '');
let kineticEnergy = (mass * speed ** 2) / 2;

alert(`the kinetic energy of the object is ${kineticEnergy} Joule`);

// c2 = a2 + b2
let leg1 = prompt('Enter first right triangle leg', '');
let leg2 = prompt('Enter second right triangle leg', '');
let hypotenuse = (leg1**2 + leg2**2) ** 0.5;

alert(`The right triangle hypotenuse is ${hypotenuse}`);

// v=s/t
let distance = prompt('Enter distance', '');
let time = prompt('Enter time', '');
let speed = distance / time;

alert(`Object speed is ${speed}`);

// E = mc2
const c = 3 * 10**8;
let mass = prompt('Enter object mass', '');
let e = mass * c**2;

alert(`Energy is ${e}`);