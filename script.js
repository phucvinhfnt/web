$('button').click( function(){
  $('.kg-weight').toggleClass('hide');
  $('.us-weight').toggleClass('hide');
});

var app = angular.module('bmiApp', []);

//TextCtrl
app.controller('headerText', function ($scope){
  $scope.mainHeader="Angular BMI Calculator";
});

//MainCtrl
app.controller('mainCtrl', function ($scope){
  // const url = './jason.json'
  // const gettodo = async (url) => {
  //   return await fetch(url);
  // }
  // const todo = await gettodo(url);
  // const { title } = await todo.json();
  // var users = (`${title}`);
 
  $scope.stats = {
    weightUS: 0,
    heightUS: 0,
    BMI: 0};
  
  var computeBMI = function(){
    $scope.stats.BMI = ($scope.stats.weightUS * 703) / ($scope.stats.heightUS * $scope.stats.heightUS) ;
  }
  
  $scope.$watch('stats.weightUS', computeBMI);
  $scope.$watch('stats.heightUS', computeBMI);
});