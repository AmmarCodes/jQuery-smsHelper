jQuery smsHelper plugin
=======================
version 1.0

Common functions for handling the client-side sms input elements are combined with this plugin.

Features
--------
- Count the total characters of a text element.
- Count how many SMSs (chunks) the text element will produce (after calculation of the Unicode characters).
- The possiblility to limit the text element to a specific number of SMSs.
- Stylizable output (characters and SMSs count).

How to use?
-----------
- Include the jQuery file

``` HTML
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
```
- Include the plugin file

``` HTML
<script type="text/javascript" src="jquery-smshelper.min.js"></script> 
```
- Call the plugin on specific text element, e.g.

``` HTML
<textarea id="text1"></textarea>
<script type="text/javascript"> 
  $(document).ready(function(){
		$("#text1").smsHelper();
	});
</script>
```

Options:
-------
- infoId: the element ID which will contains the message information (characters and chunks count).
- infoText: the text which will be displayed before the message information.
- firstBracket: the character(s) which will be displayed instead of "(" if you want so.
- lastBracket: the character(s) which will be displayed instead of ")" if you want so.
- limit: boolean to determine wether you want to limit the characters or not.
- chunks: the number of allowed message to be contained.


The plugin on [Github] (https://github.com/AAlakkad/jQuery-smsHelper). 
