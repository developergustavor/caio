"use strict";

// dtos/models/Schedule.js
class Schedule {
  userId;
  datetime;

  constructor({ userId, datetime }){
    this.userId = userId
    this.datetime = datetime
  }
}

// dtos/models/User.js
class User {
  username;
  #password;
  #schedules = []

  constructor() {}

  // getters / setters
  setUsername(username) {
    this.username = username
  }

  // functions
  createSchedule() {

  }

  _checkScheduleAvailability() {

  }
}

const user = new User()
user.setUsername('Caio')
