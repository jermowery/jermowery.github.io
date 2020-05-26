# Recipes by tags

{% assign recipes = site.recipes | sort: "name" %}
{% assign listOfTagLists = recipes | map: "tags" %}
{% assign tags = [] %}
{% for listOfTags in listOfTagLists %}
    {% assign tags = tags | concat: listOfTags %}
{% endfor %}
{% assign tags = tags | uniq %}
{% for tag in tags %}
## {{ tag | capitalize }}
{% for recipe in recipes %}
  {% if recipe.tags contains tag %}
  * [{{ recipe.name | capitalize }}]({{ recipe.file_name }})
  {% endif %}
{% endfor %}
{% endfor %}