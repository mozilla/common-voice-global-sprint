---
layout: simple
title: "Reporting"
---

<div class="reporting" markdown="1">

# Submit your sentences

<h2>
  <span class="capitalize">T</span>
  <span class="capitalize-content">
    hanks for helping collecting sentences for Common Voice!<br />
    Please make sure that the sentences you enter below are public domain.
  </span>
</h2>

<div class="content-box">
  <form id="reporting-form" action="" method="POST" target="no-target">
    <div class="form-group">
      <label for="nicknameInput">Nickname</label>
      <input type="text" class="form-control" id="nicknameInput" placeholder="Enter your nickname">
    </div>
    <div class="form-group">
      <label for="emailInput">Email (required)</label>
      <input type="text" class="form-control" id="emailInput" placeholder="Enter your email address">
      <p class="form-text text-muted">This address is required for any questions we might have.</p>
    </div>
    <div class="form-group">
      <label for="sentenceInput">Please enter your sentences here. You can enter multiple. (required)</label>
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
      <input type="checkbox" class="form-control" id="verifyInput"> I certify that I either created these sentences, or got them from a public domain source (required)
    </div>
    <p class="form-error hidden">Please check all form fields to make sure everything required is filled out!</p>
    <button type="submit" class="button submit-button">Submit</button>
  </form>

  <div class="afterSubmitInfo hidden">
    <h2>Thanks for submitting your sentences!</h2>
    <a href="{{ site.baseurl }}/upload/">Add new sentences</a>
  </div>
</div>

</div>

<!-- used as target after form submission so we don't go away from our site -->
<iframe src="#" id="no-target" name="no-target" style="display:none"></iframe>

<script src="{{ site.baseurl }}/js/upload.js"></script>
