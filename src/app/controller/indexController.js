(function () {
    'use strict';
    angular.module('app')
        .controller('indexController', [ 'indexService','$mdSidenav' ,'$timeout', '$log',IndexController]);
 function IndexController(indexService,$mdSidenav, $timeout, $log) {
    var self = this;
    var allMuppets = [];

    self.selected = null;
    self.muppets = allMuppets;
    self.selectMuppet = selectMuppet;
    self.toggleSidenav = toggleSidenav;

    loadMuppets();

    //*******************
    // Internal Methods
    //*******************
    function loadMuppets() {
            self.name = 'aaaaa';
        indexService.loadAll()
            .then(function(muppets) {
                            console.log(muppets);
                allMuppets = muppets;
                self.muppets = [].concat(muppets);
                self.selected = self.muppets[0];
                            console.log(self.muppets);

            });

    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectMuppet(muppet) {
        self.selected = angular.isNumber(muppet) ? self.muppets[muppet] : muppet;
        self.toggleSidenav('left');
    }
}

})();