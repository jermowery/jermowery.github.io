# jermowery.github.io / mowery.dev

This repo contains the source code to build jermowery.github.io / [mowery.dev](https://mowery.dev). This uses
Hugo with the ananke theme and the hugo-notice theme.

## Adding a new recipe

To add a new recipe
[add a markdown file to content/recipes](https://github.com/jermowery/jermowery.github.io/new/main/content/recipes).

- The file name must end with `.md`
- At the top of the file you must include front matter, metadata about this recipe.
  - Required fields
    - `title`: The name of this recipe, shows as the title of the page
    - `date`: Today's date. shows in the recipe
    - `author`: The name of the author
    - `description`: A one-line description of what this recipe is
    - `tags`: A list of the tags for this recipe, can be anything but is usually the intended meal like `"breakfast"`
  - Optional fields
    - `images`: A list of relevant images, can be URL or a relative path to a file, see below for more information on adding images
  - Example
    - ```
        ---
        title: "Banana Bread (Grandma Lonergan's)"
        date: 2020-07-18
        author: Matt Johnson
        description: "A cherished family banana bread recipe"
        tags: [
            "bread",
            "family",
            "breakfast",
            "dessert",
        ]
        ---
      ```
- After this, add the details for the recipe, it is typical to include a section that lists the ingredients in the order they are used and then a section that lists the steps

  - Example

    - ```
      ## Ingredients
      * 1 whole lobster
      * 8 angry bears
      * $12 in pennies
      * ...

      ## Instructions
      1. Preheat the oven to 5000 Kelvin
      2. In a mixing bowl whisk together the lobster and the bears
      3. ...
      ```

### Adding images

Adding an images to your recipe makes the images appear when sharing a link to the recipe.

To add an image do the following:

1. [Add the image to the images directory at content/recipes/images](https://github.com/jermowery/jermowery.github.io/upload/main/content/recipes/images)
2. In the front matter of your recipe `.md` file, create an `images` field and add a link to your image:
   ```
   ---
   title: "Banana Bread (Grandma Lonergan's)"
   date: 2020-07-18
   author: Matt Johnson
   description: "A cherished family banana bread recipe"
   tags: [
     "bread",
     "family",
     "breakfast",
     "dessert",
   ]
   images: [
     "/recipes/images/my_image.jpg
   ]
    ---
   ```
3. (optional) You can set the `featured_image` field to one of your images to have it appear at the top of the page
   ```
   ---
   title: "Banana Bread (Grandma Lonergan's)"
   date: 2020-07-18
   author: Matt Johnson
   description: "A cherished family banana bread recipe"
   tags: [
     "bread",
     "family",
     "breakfast",
     "dessert",
   ]
   images: [
     "/recipes/images/my_image.jpg
   ]
   featured_image: "/recipes/images/my_image.jpg"
   ---
   ```
