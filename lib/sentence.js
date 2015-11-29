'use strict';

var countSentences = function(sentences){
	if (sentences.length > 0) { 
		var num = sentences.split(".").join().split("?").join().split("!").join().split(",")
		num.pop()
		return num.length
	} else {
		return 0;
	}
};