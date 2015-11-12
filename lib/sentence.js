'use strict';

var countSentences = function(sentences){
  // code your solution here
  return sentences.split(/[.!?]/).length-1;
};