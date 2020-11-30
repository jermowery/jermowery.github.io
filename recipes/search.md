---
title: Search
description: "Search this site"
permalink: recipes/search/
tipue_search_active: true
exclude_from_search: true
---

<form action="{{ page.url | relative_url }}" style="margin-top: 8px">
  <div class="tipue_search_left">
    <img src="{{ "/assets/tipuesearch/search.png" | relative_url }}" class="tipue_search_icon">
  </div>
  <div class="tipue_search_right">
    <input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required>
  </div>
  <div style="clear: both;"></div>
</form>
  
<div id="tipue_search_content"></div>

<script>
$(document).ready(function() {
  $('#tipue_search_input').tipuesearch();
});
</script>