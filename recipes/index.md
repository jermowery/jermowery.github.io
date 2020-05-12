# Recipes

All of our recipes as we have altered them over time.

{{ site.recipes }}
{% assign recipes = site.recipes %}
{% for recipe in recipes %}
  * [{{ recipe.name | capitalize }}]({{ recipe.name }}.md)
{% endfor %}