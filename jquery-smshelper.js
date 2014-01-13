/**
 * smsHelper - a jQuery plugin helps with handling the client-side SMS text fields
 * 
 * @version 1.0
 * @author Ammar Alakkad <am.alakkad@gmail.com>
 * @website http://aalakkad.github.io
 * @license MIT
 */
(function($) {
	$.fn.extend({
		smsHelper: function(options) {
			
			// take the 1st element from the selected elements (because we're dealing with ID not classes)
			var $obj = this[0],
			chunkSize = 160,
			defaults = {
				limit: false,
				chunk: 1,
				infoId: 'smsinfo',
				infoText: '',
				firstBracket: "(",
				lastBracket: ")"
			},
			settings = $.extend(defaults, options);
			
			// check if the message has any non ASCII character
			function hasUnicode(message){
				for(i = 0 ; i < message.length ; i++) {
				    code = message.charCodeAt(i);
				    if(code > 127) 
					return true;
				}
				return false;
			}

			// get (inner set) the chunk size
			function getChunkSize(message) {
				if(hasUnicode(message)) {
					chunkSize = 70;
				}
				else {
					chunkSize = 160;
				}
				return chunkSize;
			}

			// display SMS information in the specific area (check out infoId)
			function displayTxt(length, chunks) {

				var styled = settings.infoText + length + " " + settings.firstBracket + chunks + settings.lastBracket;
				$('#' + settings.infoId).html(styled);
				
			}
			
			// limit the text area characters
			function limitChars(textId) {
				var text = $(textId).val(),
				length = text.length,
				chunks = Math.ceil(text.length / getChunkSize(text)),
				limit = settings.chunk * getChunkSize(text);
				if(length > limit) {
					$(textId).val(text.substr(0, limit));
					return false;
				}
				else {
					displayTxt(length, chunks);
					return true;
				}
			}

			// plugin initializer
			function smsHelper() {
				// if the provided object doesn't exists; then create it.
				if($('#' + settings.infoId).length == 0) {
					$($obj).after('<p id="' + settings.infoId + '"></p>');
				}
				displayTxt(0, 0);
				
				$($obj).bind('keyup keydown', function(){
					var text = $($obj).val(),
					length = text.length,
					chunks = Math.ceil(text.length / getChunkSize(text));
					
					// if the limit set to true; then limit the characters in the
					if(settings.limit == true) {
						limitChars($obj);
					}
					else {
						displayTxt(length, chunks)
					}
				});
			}
			
			// initialize
			smsHelper();
		}
	});
})(jQuery)
