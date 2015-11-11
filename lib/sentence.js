'use strict';

var countSentences = function(sentences){
   var sentence = sentences.split(/[\.!?]/)
    return sentence.length - 1
};