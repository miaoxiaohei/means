(function () {
    'use strict';    
    angular.module('app')
        .service('indexService', ['$q',IndexService])

    function IndexService ($q) {
    var muppets = [{
        name: 'Animal',
        iconurl: './web/img/photo.jpg',
        imgurl: 'http://muppethub.com/wp-content/uploads/2014/02/Animal-7.png',
        content: 'Animal is the wild and frenzied drummer of Dr. Teeth and The Electric Mayhem, the fictional band from The Muppet Show. He is one of the Muppets originally created by Michael K. Frith.'
    }, {
        name: 'Fozzie Bear',
        iconurl: './web/img/photo.jpg',
        imgurl: 'http://i.ytimg.com/vi/x-OdqmzkuRg/maxresdefault.jpg',
        content: 'Fozzie Bear is a Muppet character created by Jim Henson and developed by Frank Oz. Fozzie is an orange-brown, fozzie bear who often wears a brown pork pie hat and a red-and-white polka-dot necktie. The character debuted on The Muppet Show, as the show\'s stand-up comic, a role where he constantly employed his catchphrase, "Wocka Wocka Wocka!". Shortly after telling the joke, he was usually the target of ridicule, particularly from balcony hecklers Statler and Waldorf.'
    }, {
        name: 'The Swedish Chef',
        iconurl: './web/img/kimmie.jpg',
        imgurl: '/uploads/150201/ms_sc_05.jpg',
        content: 'The Swedish Chef is a Muppet character that appeared on The Muppet Show. He was originally performed by Jim Henson and Frank Oz simultaneously, with Henson performing the head and voice and Oz performing the character\'s live hands. The Swedish Chef is now performed by Bill Barretta.'
    }, {
        name: 'Cookie Monster',
        iconurl: './web/img/kimmie.jpg',
        imgurl: 'http://bakadesuyo.bakadesuyo.netdna-cdn.com/wp-content/uploads/2013/12/ways-to-increase-willpower.jpg',
        content: 'Cookie Monster is a Muppet on the long running children\'s television show Sesame Street. He is best known for his voracious appetite and his famous eating phrases: "Me want cookie!", "Me eat cookie!", and "Om nom nom nom" (said through a mouth full of food). He often eats anything and everything, including danishes, donuts, lettuce, apples, bananas, as well as normally inedible objects. However, as his name suggests, his preferred food is cookies. Chocolate chip cookies are his favorite kind; oatmeal cookies are his second favorite.'
    }];

    // Promise-based API
    return {
        loadAll: function() {
            // Simulate async nature of real remote calls
            return $q.when(muppets);
        }
    };
}
})();
