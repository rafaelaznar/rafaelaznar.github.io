// Author: Rafael Aznar
// MIT License

var miModulo = angular.module("MiAngularApp", []);

var miControlador = miModulo.controller("MiControlador", [
  "$scope",

  function ($scope) {
    $scope.language = 0;

    $scope.languageChange = function () {};

    loadLanguages();

    function loadLanguages() {
      $scope.txtTitle = [
        "Welcome to the Rafael Aznar's website",
        "Bienvenidos al sitio web de Rafael Aznar",
        "Benvinguts al lloc web de Rafael Aznar",
      ];
      $scope.txtIntro = [
        "Rafael Aznar works as a web development professor at CIPFP Ausiàs MArch",
        "Rafael Aznar es profesor de Desarrollo web en el CIPFP Ausiàs March",
        "Rafael Aznar és profesor de Desenvolupament web al CIPFP Ausiàs March",
      ];
    }
  },
]);
