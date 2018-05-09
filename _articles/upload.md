---
layout: simple
title: "Reporting"
---

<div class="reporting" markdown="1">

# Submit your sentences

<h2 id="header-text">
  <p>
    <span class="capitalize-content">
      <span class="capitalize">T</span>hanks for helping collecting sentences for Common Voice!<br />
      <b>Please read the <a href="{{ site.baseurl }}/contributing/">guide on how to collect sentences</a> before completing this form.</b><br />
    </span>
  </p>
    Also, please make sure that the sentences you enter below are from a <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank">public domain source</a>.
</h2>

<div class="content-box">
  <form id="reporting-form" action="" method="POST" target="no-target">
    <div class="form-group">
      <label for="nicknameInput">Nickname</label>
      <input type="text" class="form-control" id="nicknameInput" placeholder="Enter your nickname">
    </div>
    <div class="form-group">
      <label for="emailInput">Email (required)
      <p class="form-text text-muted">This address is required for any questions we might have.</p></label>
      <input type="text" class="form-control" id="emailInput" placeholder="Enter your email address">
    </div>
    <div class="form-group">
      <label for="sentenceInput">Enter your sentences here (max 5,000 characters).<br />
        Please read the <a href="{{ site.baseurl }}/contributing/">sentence collection guide</a> first. (required)
        <p class="form-error sentence-error hidden">We can only handle a maxiumum of 5,000 characters. Please submit your sentences splitted in multiple submissions or add them in a document (for example <a href="https://pastebin.com/" target="_blank">pastebin</a>) and post the public link to it here.</p>
        <p class="form-text text-muted">
        If you have less than 100 sentences, you may paste them directly below. If you 
        have <b>more than 100 sentences</b> please use an external service like <a href="https://pastebin.com/">pastebin</a>, github, or anyplace which has a public URL. Then please put the link to your sentences in this field. Thank you for reading this!</p>
      </label>
      <textarea id="sentenceInput"></textarea>
    </div>
    <div class="form-group">
      <label for="languageInput">Language (required)</label>
      <input type="text" class="form-control" id="languageInput" placeholder="Language of the sentences">
    </div>
    <div class="form-group">
      <label for="sourceInput">Link to the source of the sentences</label>
      <input type="text" class="form-control" id="sourceInput" placeholder="Enter your source">
    </div>
    <div class="form-group">
      <input type="checkbox" class="form-control" id="verifyInput"> I certify that I either created these sentences, or got them from a <a href="https://en.wikipedia.org/wiki/Public_domain" target="_blank">public domain source</a> (required)
    </div>
    <p class="form-error general-error hidden">Please check all form fields to make sure everything required is filled out!</p>
    <button type="submit" class="button submit-button">Submit</button>
  </form>

  <div class="afterSubmitInfo hidden">
    <h2>Thanks for submitting your sentences!</h2>
    <a href="{{ site.baseurl }}/upload/">Add new sentences</a>
  </div>
</div>

</div>

<!-- used as target after form submission so we don't go away from our site -->
<iframe src="#" id="no-target" name="no-target"></iframe>

<script src="{{ site.baseurl }}/js/upload.js"></script>
