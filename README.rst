jquery.charcounter plugin
==========================

Description
-----------

Simple *jQuery* pluging for creating a char counter for *textareas* and *text* inputs.

Its functionality is similar to the textarea used by *Twitter*

Requirements
-------------

jQuery 1.3+ is required.

Usage
-----

HTML code:
::

<p><textarea id="text1" cols="30" rows="3"></textarea></p>

JavaScript code:
::

$('#text1').charcounter();

Parameters
----------

**maxChars**: Number of max. allowed characters

**appendTo**: Where the counter will be inserted (*insertAfter*, *insertBefore*). Default: 'insertBefore'

**htmlTxtStart**: Beginnig text for the counter. Default: 'You have '

**htmlTxtEnd**: End text for the counter: Default: ' characters '

**cssClass**: Name of the CSS class for the counter. Default: *charcounter*

Example
-------

Download *index.html* and *jquery.charcounter.js* and load the HTML file using your favourite web browser.
