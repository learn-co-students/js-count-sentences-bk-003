'use strict';

var countSentences = function(sentences){
  // code your solution here
  var sent_count = 0

  for (var i = 0; i < sentences.length; i++) {
  	switch(sentences[i]){
  		case '.':
  		case '!':
  		case '?':
  			sent_count++;
  			break;
  	}
  };

  return sent_count;
};