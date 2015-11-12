'use strict';

var countSentences = function(sentences){
  if(sentences == "") {
    return 0;
  } else {
    return sentences.split(/!\s|\.\s|\?\s/).length;
  }
};
