# Udacity FEND
## Project: Website Optimization

### How to Run/Install
View the live demo hosted with GitHub Pages at [https://ianclaudius.github.io/frontend-nanodegree-mobile-portfolio/index.html](https://ianclaudius.github.io/frontend-nanodegree-mobile-portfolio/index.html) for the portfolio index optimizations, and [https://ianclaudius.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html](https://ianclaudius.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html) for the Pizzeria page optimizations.

Or, feel free to download or install the repo at [https://github.com/ianclaudius/frontend-nanodegree-arcade-game.git](https://github.com/ianclaudius/frontend-nanodegree-arcade-game.git) in order to run locally.

### Index page optimizations
1. Fixed blatant coding errors (for example, duplicate closing `</html>` tags).
2. Opted for system fonts rather than Google fonts. I’m a typography nerd, but in my opinion Open Sans doesn’t contribute meaningfully to the page over San Francisco or other native fonts.
3. Images: Created optimized assets via ImageOptim, ImageAlpha, and JPEGmini. Also created resized thumbnail assets and shifted to locally-hosted assets where necessary.
4. CSS: Inlined minified styles, added a `media` attribute to print styles to prevent render blocking.
5. JavaScript: Minified and utilized the `async` attribute.

### Pizzeria page optimizations
1. Fixed blatant coding errors (for example, missing curly braces).
2. Images: Created optimized assets via ImageOptim, ImageAlpha, and JPEGmini. Also created resized thumbnail assets.
3. CSS: Made use of `will-change: transform;` and minification.
4. JavaScript: Refactored code to eliminate problem areas that slowed framerate and computational efficiency. Particularly some resource-hogging `for` loops. Minified as well.
