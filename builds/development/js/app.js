angular
    .module('myApp', [])
    .controller('myController', myController);

function myController(){
    var vm = this;
    vm.data = [
        {day:[0,0,3,0,5,6,0,0,0,0,0,0,0,0]},
        {day:[0,2,0,0,5,0,0,8,0,0,0,0,0,0]},
        {day:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
        {day:[0,2,0,0,5,0,0,8,0,10,0,0,0,0]},
        {day:[0,0,0,4,0,6,7,0,0,0,0,0,0,0]},
        {day:[0,0,3,0,0,0,7,0,0,0,0,0,0,0]}
    ];

}