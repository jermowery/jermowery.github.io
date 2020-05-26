{% assign recipes = site.recipes | sort: "name" %}
{% assign listOfTagLists = recipes | map: "tags" %}
{% assign tags = [] %}
{% for listOfTags in listOfTagLists %}
  {% assign tags = tags | concat: listOfTags %}
{% endfor %}
{% assign tags = tags | uniq %}
{{ tags }}