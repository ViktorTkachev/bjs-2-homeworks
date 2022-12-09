class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if(id === undefined){
      throw new Error('Вы не присвоили id будильнику!');
    }
    if(this.alarmCollection.find((alarm) => alarm.id === id)){
      console.error('Будильник с таким id уже существует!');
    } else {
      this.alarmCollection.push({time, callback, id});
    }
  }

  removeClock(id) {
    let findAlarm = this.alarmCollection.every((alarm) => alarm.id === id);
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id ==! id);
    return findAlarm;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
  }

  start() {
    const checkClock = (getAlarm) => {
      if (getAlarm.time === this.getCurrentFormattedTime()) {
        getAlarm.callback();
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => checkClock(alarm)));
    }
  }

  stop() {
    if (this.timerId =! null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms(){
    this.alarmCollection.forEach((alarm) => console.log(`${alarm.id}, ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
