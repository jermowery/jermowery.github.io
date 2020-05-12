# Recipes

All of our recipes as we have altered them over time.

{% assign recipes = sites.recipes | sort %}
{% for recipe in recipes %}
  * [{{ recipe.name | capitalize }}]({{ recipe.name }}.md)
{% endfor %}