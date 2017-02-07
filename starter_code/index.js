/*jshint esversion: 6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
const person = new Person('manu',1,2);
const person2 = new Person ('juan',3,4);
const person3 = new Person ('pablo',0,4);
elevator.call(person);
elevator.call(person2);
elevator.call(person3);


console.log(elevator.start());
