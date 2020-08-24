---
title: Recipes
---
# Recipes
[Recipes by tags](tags.html)

All of our recipes as we have altered them over time.

{% assign recipes = site.recipes | sort_natural: "name" %}
{% for recipe in recipes %}
  * [{{ recipe.name | capitalize }}]({{ recipe.file_name }})
{% endfor %}
