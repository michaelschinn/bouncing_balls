// setup canvas

const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),

width = canvas.width,
height = canvas.height;

// function to generate random number

function random(min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}