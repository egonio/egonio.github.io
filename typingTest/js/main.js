'use strict';

angular.module('WPMApp', [])

.controller('FormController', ['$scope', function($scope) {

  $scope.details = { age: "",hours :"",phone:"",avgText :""};

  var temp = $scope.details.age.split(" ");
  /*
  console.log (temp.toString());
  console.log ($scope.details);
  console.log ($scope.details.age);
  */
  $scope.words = temp[0];
}])

.controller('lightThemeController', ['$scope', function($scope) {

  var words = ['Jim','quickly','realized','that','the','beautiful','gowns','are','expensive'];

  $scope.index = 0;
  $scope.right = 0;
  $scope.backspaceUsed = 0;
  $scope.count = 0;
  $scope.word1 = words[0];
  $scope.word2 = words[1];
  $scope.word3 = words[2];
  $scope.word4 = words[3];
  $scope.word5 = words[4];
  $scope.word6 = words[5];
  $scope.word7 = words[6];
  $scope.word8 = words[7];
  $scope.word9 = words[8];
  $scope.typed = '';
  $scope.class1="bold";
  $scope.results = "";
  $scope.timeStart = 0;
  var WPM = 0;
  var curTime = 0;
  var resultTime = 0;
  var raw = 54 / 9;


  $scope.typing = function(){
    if($scope.timeStart == 0){
      $scope.timeStart =  (new Date()).getTime();
    }
    $scope.count++;
    if($scope.index == 9){
      curTime  =  (new Date()).getTime();

      resultTime = (curTime - $scope.timeStart)  / 1000;
      $scope.timeStart = 0;
      curTime = 0;
      WPM = raw / (resultTime);
      $scope.results = "WPM :" + WPM  + "....... Accuracy: " + (100 - (($scope.backspaceUsed/$scope.count) * 100));
      $scope.index++;
    }else{

      if($scope.typed.localeCompare(words[$scope.index]) == 0){
        /*
        console.log($scope.typed.localeCompare(words[$scope.index]));
        console.log($scope.typed);
        console.log(words[$scope.index]);
        */
        $scope.index++;
        $scope.typed = "";
        indexBolder($scope.index);
      }
    }

  };

  $scope.onKeyUp = function ($event){
    if(event.keyCode == '8'){
      if($scope.count != 0){
        $scope.backspaceUsed++;
      }
    }
  }

  function indexBolder(index){
    index == 0 ? $scope.class1 = "bold" :$scope.class1 = "";
    index == 1 ? $scope.class2 = "bold" :$scope.class2 = "";
    index == 2 ? $scope.class3 = "bold" :$scope.class3 = "";
    index == 3 ? $scope.class4 = "bold" :$scope.class4 = "";
    index == 4 ? $scope.class5 = "bold" :$scope.class5 = "";
    index == 5 ? $scope.class6 = "bold" :$scope.class6 = "";
    index == 6 ? $scope.class7 = "bold" :$scope.class7 = "";
    index == 7 ? $scope.class8 = "bold" :$scope.class8 = "";
    index == 8 ? $scope.class9 = "bold" :$scope.class9 = "";
  }
}])

;


var phrase51 = [
  "Jim quickly realized that the beautiful gowns are expensive.",
  "Quirky spud boys can jam after zapping five worthy Polysixes.",
  "Jackie will budget for the most expensive zoology equipment."
];

var phrase50 = [
  "Zack Gappow saved the job requirement list for the six boys.",
  "Zelda might fix the job growth plans very quickly on Monday. ",
  "The wizard quickly jinxed the gnomes before they vaporized. "
];

var phrase49 =[
  "All questions asked by five watched experts amaze the judge.",
  "A quick movement of the enemy will jeopardize six gunboats.",
  "Just keep examining every low bid quoted for zinc etchings."
];
