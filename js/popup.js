(function ($) {
    'use strict';

    chrome.storage.sync.get(['translationMode'], function (items) {
        $("#mode").val(items['translationMode'] || '0');
    });

    $("#mode").change(function () {
        chrome.storage.sync.set({'translationMode': $(this).val()});
    });

})(jQuery);