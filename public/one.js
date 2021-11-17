var nameS;
(function (nameS) {
    function s() {
        console.log('qweqwe');
    }
    nameS.s = s;
})(nameS || (nameS = {}));
