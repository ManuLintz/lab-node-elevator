/*jshint esversion: 6*/
class Elevator {
  constructor(){
    this.floor      = 3;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction='up';
  }



  start() {
    const that=this;
    if (this.direction==='up'&& this.floor<=that.MAXFLOOR){
     this.timer= setInterval(function(){
      that.log();
    that.floorUp();
    if (that.floor===that.MAXFLOOR+1){
      that.stop();
      that.direction='down';
    }},1000);
      }
    else if (this.direction==='down')
      {this.timer= setInterval(function(){
       that.log();
     that.floorDown();
     if (that.floor===0){
       that.stop();}
  });
}}


  stop() {
    clearInterval(this.timer);
  }
  update() {
    let that = this;
    this.waitingList= this.requests.filter(function(item){
        return (item.originFloor != that.floor);
      });

    //return this.log(), floorToDeserve;
    //console.log(this.waitingList);
    return this.log();

  }

  passengersEnter() {
    let that=this;
    this.passengers= this.waitingList.filter(function(elem){
        return elem.originFloor ===that.floor;
    });
    console.log(this.passengers);}


  passengersLeave() {
    let that=this;
    this.passengers= this.passengers.filter(function(elem){
        return elem.originFloor !=that.floor;
    });
    return this.passengers; }

  floorUp() {
    if(this.floor<this.MAXFLOOR+1)
    this.floor +=1;
    }

  floorDown() {
    if(this.floor >0)
  this.floor -=1; }
  call(Person) {
    this.requests.push(Person);
    //console.log(this.requests);

  }
  log() {
  return (this.floor, this.direction);
  }
}

/*class Elevator extends Person {
  constructor(name,originFloor,destinationFloor){
    super(name, price);
    this.brand = brand;
  }
}*/



module.exports = Elevator;
