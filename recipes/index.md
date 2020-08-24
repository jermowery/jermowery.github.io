---
title: Recipes
description: A list of recipes
---
[Recipes by tags](tags.html)

All of our recipes as we have altered them over time.

{% assign recipes = site.pages | sort_natural: "title" %}
{% for recipe in recipes %}
  {% if recipe.title %}
  * [{{ recipe.title | capitalize }}]({{ recipe.url }})
  {% endif %}
{% endfor %}
