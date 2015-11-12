'use strict';

var countSentences = function(sentences){
  if(sentences != "")
  sentences = sentences.replace("!", ".").replace("?", ".").replace(/\.$/, "").split(".")
  return sentences.length
};