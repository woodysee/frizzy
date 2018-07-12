const csso = require('csso');
const fs = require('fs');
const rawCSS = fs.readFileSync('dist/frizzy.css', 'utf8');
const minifiedCSS = csso.minify(rawCSS, {
  filename: 'dist/frizzy.min.css', // will be added to source map as reference to source file
  sourceMap: true             // generate source map
}).css;
// console.log(minifiedCSS);
fs.writeFile('dist/frizzy.min.css', minifiedCSS, (err) => {
  if (err) throw err;
  console.log("...frizzy CSS has been compiled and minifed.");
})
