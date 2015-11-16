'use strict';

var countSentences = function(sentences){
  // code your solution here
  if (sentences == "") {
  	return 0
  };
  if (sentences.includes(".")) {
  	var array = sentences.split(". ");
		if (sentences.includes("?")) {
		 	var newSentences = sentences.replace("?", ".");
		 	var array = newSentences.split(". ");
			 	if (newSentences.includes("!")) {
				 	var newerSentences = newSentences.replace("!", ".");
				 	var array = newerSentences.split(". ");
				};
		};
 	};
  return array.length;
};