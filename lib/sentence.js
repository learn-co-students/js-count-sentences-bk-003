'use strict';

var countSentences = function(sentences){
  var count = 0 
  sentences.split("").forEach(function(m){
    if (m == "." || m == "!" || m == "?"){
      count += 1
    }
    
  })
  return count
};