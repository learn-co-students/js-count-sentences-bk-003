'use strict';

var countSentences = function(sentences){
  var sentArray = sentences.split(/[\.!?]/)
  return sentArray.length - 1;
};