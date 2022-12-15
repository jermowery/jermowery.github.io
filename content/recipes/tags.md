---
title: "Recipes by tags"
showInRecipesList: false
exclude_from_search: true
---

[All recipes](index.html)

{% assign recipes = site.pages | sort_natural: "name" %}
{% assign listOfTagLists = recipes | map: "tags" %}
{% assign tags = '' | split: '' %}
{% for listOfTags in listOfTagLists %}
{% if listOfTags %}
{% assign tags = tags | concat: listOfTags %}
{% endif %}
{% endfor %}
{% assign tags = tags | uniq | sort_natural %}
{% for tag in tags %}

## {{ tag | capitalize }}

{% for recipe in recipes %}
{% if recipe.tags contains tag %}

- [{{ recipe.title | capitalize }}]({{ recipe.url }})
  {% endif %}
  {% endfor %}
  {% endfor %}
