'use strict';

(function(){

class SeatbookingComponent {
  constructor() {
    this.message = 'Hello';
    this.m=[];
  $(document).ready(function(){
    $(".seatbook").click(function(){
      $(this).toggleClass("green");
    });
    });



  }

  $onInit()
  {

        for(var i=0;i<20;i++)
        this.m[i]=i;

  }
}

angular.module('yotemplateApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
