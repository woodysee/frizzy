# Compile all CSS files into single file
cd src
find . -name '*.css'
cat `find . -name '*.css' -print` > ../dist/frizzy.css
echo "...frizzy CSS compiled."
cd ..
node minify-styles.js
