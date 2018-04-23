(function() {
  'use strict';

  var API_KEY = 'AIzaSyDziLuMxVaWGuE4BVh-gxvuY9y7evusUx0';
  var RANGE = 'A2:E';
  var SPREADSHEET_ID = '15HK8boTLejnOK5UuOkNQ3OLphEL8H4rOy_QtOBQbcks';
  var publicEndpoint = 'https://sheets.googleapis.com/v4/spreadsheets/' + SPREADSHEET_ID +
    '/values/' + RANGE + '?key=' + API_KEY;

  var leaderboardTableBody = document.querySelector('#leaderboard tbody');

  function getData() {
    fetch(publicEndpoint)
      .then(function(result) {
        return result.json();
      }).then(function(result) {
        var data = result.values.map(function(entry) {
          return {
            Nickname: entry[1],
            Language: entry[2],
            Sentence: entry[3],
          };
        }).filter(function(entry) {
          return entry.Nickname;
        });

        processInfo(data);
      });
  }

  function processInfo(data) {
    var groupedByNickname = groupByNickname(data);
    groupedByNickname.sort(sortByName);

    document.querySelector('#loading').classList.add('hidden');

    if (groupedByNickname.length === 0) {
      document.querySelector('#no-results').classList.remove('hidden');
    }

    groupedByNickname.forEach(function(entry) {
      var row = document.createElement('tr');

      var nameCell = document.createElement('td');
      nameCell.textContent = entry.name;
      row.appendChild(nameCell);

      leaderboardTableBody.appendChild(row);
      document.querySelector('#leaderboard').classList.remove('hidden');
    });
  }

  function groupByNickname(entries) {
    var result = [];

    entries.forEach(function(entry) {
      const existingNicknameEntry = result.find(function(existingEntry) {
        return existingEntry.name === entry.Nickname;
      });

      if (existingNicknameEntry) {
        // only count the same sentence once
        const existingSentence = existingNicknameEntry.entries.find((existingEntry) => {
          return entry.Sentence == existingEntry.Sentence;
        });

        if (existingSentence) {
          return;
        }

        existingNicknameEntry.amount++;
        existingNicknameEntry.entries.push(entry);
        return;
      }

      const newNicknameEntry = {
        name: entry.Nickname,
        amount: 1,
      };

      result.push(newNicknameEntry);
    });

    return result;
  }

  function sortByName(a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }

    return 0;
  }

  window.addEventListener('DOMContentLoaded', getData);
})();
