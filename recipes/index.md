# Recipes

All of our recipes as we have altered them over time.

{% assign recipes = site.recipes %}
{% for recipe in recipes %}
  * [{{ recipe.name | capitalize }}]({{ recipe.file_name }})
{% endfor %}