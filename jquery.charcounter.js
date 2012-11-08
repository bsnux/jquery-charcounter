/**
*   jQuery plugin for creating a char counter for textareas and text inputs
*
*   Author: Arturo Fernandez - http://www.bsnux.com/
*   License: GPL v3
*
*   jQuery 1.3+ is required
*
*   This plugin was inspired by http://www.jqeasy.com/jquery-character-counter/
**/
(function ($) {

    $.fn.charcounter = function (options) {

        var settings = {
            maxChars: 80,
            appendTo: 'insertBefore',
            htmlTxtStart: 'You have ',
            htmlTxtEnd: ' characters',
            cssClass: 'charcounter'
        };

        return this.each(function () {
            function calChars() {
                var val = $(this).val(), length = val.length;

                if (length >= settings.maxChars) {
                    val = val.substring(0, settings.maxChars);
                }

                if (length > settings.maxChars) {
                    var originalScrollTopPosition = $(this).scrollTop();
                    $(this).val(val.substring(0, settings.maxChars));
                    $(this).scrollTop(originalScrollTopPosition);
                }

                var charsAvailable = settings.maxChars - $(this).val().length;
                charCounterObj.html(settings.htmlTxtStart + charsAvailable + settings.htmlTxtEnd);
		    }

            if (options) {
                $.extend(settings, options);
            }
            var charCounterObj = $("<div class=" + settings.cssClass + "></div>");
            /* Setting 'width' */
            charCounterObj.css('width', $(this).width());
            charCounterObj[settings.appendTo]($(this));

            /* Setting 'html' content for widget */
            var charsAvailable = settings.maxChars - $(this).val().length;
            charCounterObj.html(settings.htmlTxtStart + charsAvailable + settings.htmlTxtEnd);
            /* Bind events */
            $(this).bind('keydown keyup keypress', calChars);
        });
    };
})(jQuery);
