'use strict';

var countSentences = function(sentences){
  if(sentences.match(/[.?!]/g)) {
  	return sentences.match(/[.?!]/g).length;
  } else {
  	return 0;
  }
};