'use strict';

var countSentences = function(sentences){
	var re = /[!?.]/;
	var num = sentences.split(re).length-1;
	return num
};