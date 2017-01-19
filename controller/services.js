angular.module("App.services", [])
    .value('version', '0.1')
    .service("UtilSrvc", function() {
        return {
            isAString: function(o) {
                return typeof o == "string" || (typeof o == "object" && o.constructor === String);
            },
            helloWorld: function(name) {
                console.log('opa');
                var result = "Hum, Hello you, but your name is too weird...";
                if (this.isAString(name)) {
                    result = "Hello, " + name;
                }
                return result;
            }
        }
    });
