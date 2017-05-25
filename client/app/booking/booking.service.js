'use strict';

function bookingService() {
	this.movieName;
	this.theatreName;
	this.date;
	this.time;
}

angular.module('yotemplateApp')
  .service('booking', bookingService);
