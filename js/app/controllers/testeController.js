angular.module('listaTelefonica', [])
    .controller('testeController', [function() {
        let vm = this;
        vm.user = {
            name: document.getElementById("ctrl.user.name"),
            email: document.getElementById("ctrl.user.email")
        };
        

        vm.register = function() {
            console.log('User clicked register', vm.user);
        }

        vm.insertName = function(name) {
            
            if ( vm.user.name == null ) {
                vm.user.name = ' ';
            }
            
            vm.user.name += ', ' + name;            
        }
    }])