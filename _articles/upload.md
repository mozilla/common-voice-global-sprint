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
      <p id="nickname" class="form-text text-muted">This nickname will show up in several places and is public.</p>
    </div>
    <div class="form-group">
      <label for="sentenceInput">Please enter your sentences here. You can enter multiple.</label>
      <input type="input" class="form-control" id="sentenceInput" placeholder="https://www.mozilla.org">
    </div>
    <p class="form-error hidden">Please check all form fields to make sure everything required is filled out!</p>
    <button type="submit" class="button submit-button">Submit</button>
  </form>

  <div class="afterSubmitInfo hidden">
    <h2>Thanks for submitting your report!</h2>
    <a href="{{ site.baseurl }}/upload/">Add new sentences</a>
  </div>
</div>

</div>

<!-- used as target after form submission so we don't go away from our site -->
<iframe src="#" id="no-target" name="no-target" style="display:none"></iframe>

<script src="{{ site.baseurl }}/js/upload.js"></script>
