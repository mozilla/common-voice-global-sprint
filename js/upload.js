'use strict';

const ReportingForm = {
  submit: function() {
    var form = document.querySelector('#reporting-form');
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdhJXalpySzehOYm63pXJgJzowp8Bkz2SXBTH_PP4ztyivigQ/formResponse?';
    var submitRef = '&submit=Submit';

    var nicknameValue = document.querySelector('#nicknameInput').value;
    var nicknameEntry = 'entry.888970648';
    var emailValue = document.querySelector('#emailInput').value;
    var emailEntry = 'entry.275459254';
    var sentenceValue = document.querySelector('#sentenceInput').value;
    var sentenceEntry = 'entry.908686419';
    var languageValue = document.querySelector('#languageInput').value;
    var languageEntry = 'entry.1606981245';
    var sourceValue = document.querySelector('#sourceInput').value;
    var sourceEntry = 'entry.2094554958';
    var verify = document.querySelector('#verifyInput:checked');
    var verifyEntry = 'entry.112814371';
    var verifyValue = 'I certify that I either created these sentences, or got them from a public domain source';

    if (!verify || !emailValue || !sentenceValue || !languageValue) {
      document.querySelector('.form-error').classList.remove('hidden');
      return false;
    }

    var submitURL = baseURL +
        nicknameEntry + "=" + nicknameValue + "&" +
        emailEntry + "=" + emailValue + "&" +
        sentenceEntry + "=" + sentenceValue + "&" +
        languageEntry + "=" + languageValue + "&" +
        sourceEntry + "=" + sourceValue + "&" +
        verifyEntry + "=" + verifyValue + "&" +
        submitRef;

    form.action = submitURL;

    document.querySelector('#reporting-form').classList.add('hidden');
    document.querySelector('.afterSubmitInfo').classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}

document.querySelector('#reporting-form').addEventListener('submit', ReportingForm.submit);
