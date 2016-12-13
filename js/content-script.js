(function () {
    'use strict';

    var video = '';

    findPlayingVideo();

    function findPlayingVideo() {
        var currentVideoSource = '';
        setInterval(function () {
            var videos = document.getElementsByTagName('video');
            for (var i = 0; i < videos.length; i++) {
                if (!videos[i].paused) {
                    var source = $(videos[i]).attr("src");
                    if (currentVideoSource !== source) {
                        console.log("New video playing " + source);
                        currentVideoSource = source;
                        video = videos[i];
                        var playerClass = $(video).parent().prop('className');
                        var playerNode = document.getElementsByClassName(playerClass)[0];
                    }
                }
            }
        }, 3000);
    }

})();
