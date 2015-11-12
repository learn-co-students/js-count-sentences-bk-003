'use strict';

var countSentences = function(sentences){
  return (sentences && ((sentences.match(/\.|\?|!/g) || []).length || 1)) || 0
};