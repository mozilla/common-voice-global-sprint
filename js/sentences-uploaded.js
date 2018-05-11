(function() {
  'use strict';

  var ADDED_OUTSIDE_COUNT = 2460 + 400 + 1400 + 7800 + 2417 + 2576 + 357;
  var END_DATE = new Date('2018-05-10');
  var today = new Date();
  var distance = END_DATE - today;
  var API_KEY = 'AIzaSyDziLuMxVaWGuE4BVh-gxvuY9y7evusUx0';
  var RANGE = 'A2:E';
  var SPREADSHEET_ID = '15HK8boTLejnOK5UuOkNQ3OLphEL8H4rOy_QtOBQbcks';
  var publicEndpoint = 'https://sheets.googleapis.com/v4/spreadsheets/' + SPREADSHEET_ID +
    '/values/' + RANGE + '?key=' + API_KEY;

  // Only show sites tested while sprint is going on
  if (distance > 0) {
    return;
  }

  var sitesTestedElement = document.querySelector('.sentences-uploaded');

  function getData() {
    fetch(publicEndpoint)
    .then(function(result) {
      return result.json();
    }).then(function(result) {
      var data = result.values.map(function(entry) {
        return entry[2];
      }).filter(function(entry) {
        return entry;
      });

      processInfo(data);
    });
  }

  function splitSentences(entries) {
    var rejectedSentencesCount = 0;
    var MAX_WORDS = 14;
    var splittedSentences = entries
      .map(function(sentences) {
        var lines = sentences.replace(/[\"”“]/g, ).split(/\||\. |\!|\?]/g);
        lines = lines.map(function(line) {
          line = line.trim();
          if (line.split(' ').length > MAX_WORDS) {
            rejectedSentencesCount++;
            return;
          }

          return line;
        });

        return lines;
      });

    console.log('total of rejected (too long) sentences:', rejectedSentencesCount);

    var filtered = [].concat(...splittedSentences).filter(function(sentence) {
      return sentence;
    });

    var totalSentences = filtered.length + rejectedSentencesCount;
    console.log('percentage of rejected sentences', rejectedSentencesCount / totalSentences);

    return filtered;
  }

  function processInfo(data) {
    var sentences = splitSentences(data);
    var uniqueSentences = getUnique(sentences);
    console.log('number of sentences without outside submission', uniqueSentences.length);
    var totalUniqueSentences = uniqueSentences.length + ADDED_OUTSIDE_COUNT;
    sitesTestedElement.textContent = 'At least ' + totalUniqueSentences + ' sentences submitted!';
    sitesTestedElement.classList.remove('hidden');
  }

  function getUnique(entries) {
    var result = [];

    entries.map(function(entry) {
      if (!result.includes(entry)) {
        result.push(entry);
      }
    });

    return result;
  }

  window.addEventListener('DOMContentLoaded', getData);
})();
