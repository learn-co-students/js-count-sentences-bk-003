'use strict';

var countSentences = function(sentences){
  return sentences.split(/\!|\?|\./).slice(0, -1).length;
};
