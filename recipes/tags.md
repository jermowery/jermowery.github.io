---
title: "Recipes by tags"
---
[All recipes](index.html)

{% assign recipes = site.recipes | sort_natural: "name" %}
{% assign listOfTagLists = recipes | map: "tags" %}
{% assign tags = '' | split: '' %}
{% for listOfTags in listOfTagLists %}
    {% assign tags = tags | concat: listOfTags %}
{% endfor %}
{% assign tags = tags | uniq | sort_natural %}
{% for tag in tags %}
## {{ tag | capitalize }}
{% for recipe in recipes %}
  {% if recipe.tags contains tag %}
  * [{{ recipe.name | capitalize }}]({{ recipe.file_name }})
  {% endif %}
{% endfor %}
{% endfor %}