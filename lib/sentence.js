'use strict';

var countSentences = function(sentences){
  // code your solution here
  var period = (sentences.split(".").length - 1)  
  var ex = (sentences.split("!").length - 1)
  var question = (sentences.split("?").length - 1)
  return period + ex + question
};