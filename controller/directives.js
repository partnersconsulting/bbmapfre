angular.module('App.directives', [])
    .directive('panel', function() {
        var ddo = {}; //sempre retorna

        ddo.restrict = 'E'; //Atribute or element

        ddo.scope = {
            title: '@title',
            linkback: '@linkback',
            type: '@type'
        }

        ddo.transclude = true;

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/panel.html' + r;
        return ddo;
    })

.directive('entry', function() {
        var ddo = {};


        ddo.restrict = 'E';

        ddo.scope = {
            title: '@title',
            size: '@size',
            type: '@type',
            onlyview: '=',
            list: '=',
            model: '='
        }

        ddo.controller = function($rootScope, $scope, $attrs) {
            //console.log("onlyview: " + $scope.model);



            if (!$scope.size) {
                $scope.size = 2;
            }
            if (!$scope.name) {
                $scope.name = $attrs.model;
            }
        }

        ddo.compile = function(element, attrs) {
            element.attr('class', "col-md-" + attrs.size);
        }

        var r = '?n=' + Math.random();

        ddo.templateUrl = 'view/directives/entry.html' + r;
        return ddo;
    })
    .directive('exportToCsv', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var el = element[0];
                element.bind('click', function(e) {
                    var table = e.target.nextElementSibling;
                    var csvString = '';
                    for (var i = 0; i < table.rows.length; i++) {
                        var rowData = table.rows[i].cells;
                        for (var j = 0; j < rowData.length; j++) {
                            csvString = csvString + rowData[j].innerHTML + ",";
                        }
                        csvString = csvString.substring(0, csvString.length - 1);
                        csvString = csvString + "\n";
                    }
                    csvString = csvString.substring(0, csvString.length - 1);
                    var a = $('<a/>', {
                        style: 'display:none',
                        href: 'data:application/octet-stream;base64,' + btoa(csvString),
                        download: 'emailStatistics.csv'
                    }).appendTo('body')
                    a[0].click()
                    a.remove();
                });
            }
        }
    });
