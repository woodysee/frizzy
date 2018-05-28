# Frizzy

Reusable UI component library for Airfrov web.

## Initialising repository

`npm install` installs all vendor packages needed inside `./node_modules`.

## Adding a new component

1. Create a new folder inside `./src/components`, e.g. `./src/components/someButton`.
2. The entry file is `index.js`. Keep the component self-contained.
3. Add the new component to be added into the compiled script.

```js

// ./index.js

import someButton from './components/someButton';

```
4. Allow the scripts to be used afterwards.

```js

// ./index.js

import someButton from './components/someButton';
someButton();

```

5. Compile the script once the changes are made.

```shell

npm run build

```

## References

- [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)