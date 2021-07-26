// Write your JavaScript here...
'use strict';

$(".menu-toggle").click(function () {
    var navigation = document.getElementById('head-nav-list');
    navigation.classList.toggle('openMenu');
    var navigationWrapper = document.getElementById('nav-wrapper');
    navigationWrapper.classList.toggle('openNav');
});

