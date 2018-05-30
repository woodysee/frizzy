# Frizzy

Reusable UI component library for Airfrov web.

## Initialising repository

`npm install` installs all vendor packages needed inside `./node_modules`.

## Adding a new component

- Create a new folder inside `./src/components`, e.g. `./src/components/someButton`.
- The entry file is `index.js`. Keep the component self-contained. Typically the minimum files are `someButton/index.js` &amp; `someButton/index.scss`. To compile all SCSS files into CSS files, run `npm run build-css`. `npm run watch-css` allows continuous compiling whenever SCSS files are modified. 
- Add the new component to be added into the compiled script as so:

```js
// ./index.js
import someButton from './components/someButton';
```
- You can also allow the component to be run on page load where the script is launched.

```js
// ./index.js

import someButton from './components/someButton';
someButton();
```

- Compile the script once the changes are made. `npm run build-css` is also run before webpack compilation.

```shell
npm run build
```

6. To use the library in the webpage, copy all of `/dist` and its contents to your own asset repository. Then just add a script tag linking to its location to the page where the `frizzy.min.js`. `/dist/demo` is not necessary and can be deleted when deploying.

```html
<body>
  <!-- content here -->
  <script src="path/to/dist/frizzy.min.js"></script>
</body>
```

## References

- [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)
