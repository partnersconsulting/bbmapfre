angular.module("App.filters", [])
    .filter('interpolate', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    })
    .filter('getById', function() {
        return function(input, id) {
            var i = 0,
                len = input.length;
            for (; i < len; i++) {
                if (+input[i].id == +id) {
                    return input[i];
                }
            }
            return null;
        }
    })
    .filter('getByCEP', function() {
        return function(input, cep) {
            var i = 0,
                len = input.length;
            for (; i < len; i++) {
                if (+input[i].code == +cep) {
                    return input[i];
                }
            }
            return null;
        }
    });
