var app = angular.module ("FoodMenuApp",[]);

var main = function () {
  $('.nav-collapse').on('click', function() {
    $('.nav').toggleClass('clicked-nav');
    $('.logo').toggleClass('clicked-logo');
  });





};


$(document).ready(main);

// This is all useless