var mod = angular.module("tlKeyPresses", []);
mod.directive("tlEnter", [
    "$timeout",
    function ($timeout) { return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                $timeout(function () {
                    scope.$eval(attrs.tlEnter);
                }, 0);
                event.preventDefault();
            }
        });
    }; }
]);
